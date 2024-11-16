"use client";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  Delete,
  Loader2,
  LoaderIcon,
  MoreHorizontal,
  Trash
} from "lucide-react";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Product, columns } from "./components/columns";
import { DataTablePagination } from "./components/data-table-pagination";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { useStore } from "zustand";
import { useProductStore } from "@/hooks/use-product";


export default function AllProducts() {
  const { setProducts, products } = useStore(useProductStore, (state) => ({
    products: state.products,
    setProducts: state.setProducts
  }));
  const queryClient = useQueryClient();
  const {
    isPending,
    error,
    data: fetchData,
    isSuccess
  } = useQuery({
    queryKey: ["AllArticleTable"],
    queryFn: () =>
      fetch("/api/routes/fetchAllArticleAdmin").then((res) => res.json())
  });

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [isDeletingAll, setIsDeletingAll] = React.useState(false);
  const { toast } = useToast();

  React.useEffect(() => {
    if (isSuccess && fetchData) {
      // Update Zustand store with the fetched products
      setProducts(fetchData.allProducts);
    }
  }, [isSuccess, fetchData, setProducts]);

  const table = useReactTable({
    data: products, // Use products from Zustand store
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleDeleteAll = async (allSelected: string[]) => {
    if (allSelected.length === 0) {
      toast({
        description: "Select Products to delete",
        variant: "destructive"
      });
      return;
    }
    try {
      setIsDeletingAll(true);
      const response = await axios.delete("/api/routes/deleteArticle", {
        data: { productIds: allSelected }
      });

      if (response.data.message === "Selected Products deleted successfully") {
        setProducts(
          products.filter((product) => !allSelected.includes(product._id))
        );
        setRowSelection({});
        setIsDeletingAll(false);
        toast({
          description: "Products deleted Successfully"
        });
        return "success";
      }
    } catch (error) {
      setIsDeletingAll(false);
      if (allSelected.length !== 0)
        toast({
          description: "Failed to delete Product",
          variant: "destructive"
        });
      return "failed";
    }
  };
  return (
    <div>
      <div className="w-full">
        <div className="flex gap-6 items-center py-4">
          <Input
            placeholder="Filter title..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />

          <Button
            variant={"outline"}
            disabled={isDeletingAll}
            onClick={openDialog}
          >
            {isDeletingAll && (
              <Loader2 className=" text-center h-6 w-6 animate-spin" />
            )}
            <Trash className=" text-red-700" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="dark:bg-neutral-900 bg-neutral-100"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table?.getRowModel().rows?.length ? (
                table?.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center flex items-center justify-center"
                  >
                    {isPending ? (
                      <Loader2 className=" text-center h-6 w-6 animate-spin" />
                    ) : (
                      <h1>No results</h1>
                    )}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className=" py-4">
          <DataTablePagination table={table} />
        </div>
      </div>
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              product and remove the data from the servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={closeDialog}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                handleDeleteAll(
                  table
                    .getSelectedRowModel()
                    .rows.map((selectedRows) => selectedRows.original._id)
                );
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

