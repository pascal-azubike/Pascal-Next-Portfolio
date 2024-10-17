"use client";
import * as React from "react";
import Image from "next/image";
import { useEffect, useState, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import Resizer from "react-image-file-resizer";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

// Dynamically import React Quill
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import { Loader2 } from "lucide-react";

import axios from "axios";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import useUploadMutation from "@/hooks/useUploadMutation";
import { handleImageUpload } from "@/hooks/handleImageUpload";
import { modulesObject } from "@/components/admin-panel/modules";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

const formSchema = z.object({
  title: z.string().nonempty({ message: "Title is required." }),
  description: z.any(),
  image: z.string().nonempty({ message: "Image is required." }),

  blurImage: z.string().nonempty({ message: "blur Image string is required." })
});

export default function CreateProduct() {
  return (
    <React.Suspense>
      <ProductForm />
    </React.Suspense>
  );
}
function ProductForm() {
  const [isFetchingImage, setIsFetchingImage] = useState(false);
  const [quillIsFocus, setQuillIsFocus] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const url = id
    ? `/api/routes/edit-article?productId=${id}`
    : "/api/routes/create-article";

  const {
    isPending: fetchEditIsPending,
    error: fetchEditIsError,
    data: fetchEditIsData,
    isSuccess: fetchEditIsSuccess
  } = useQuery({
    queryKey: [id],
    queryFn: () =>
      axios(`/api/routes/fetchSingleArticle?articleId=${id}&place=create`)
  });

  const { toast } = useToast();
  console.log(fetchEditIsData);

  const { error, isSuccess, mutate, isPending } = useUploadMutation(url, [
    "newArticle",
    "featureArticles"
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image: ""
    }
  });

  const [editorContent, setEditorContent] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const beforeDivRef = useRef<HTMLDivElement>(null);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    mutate(values);
    generatePDF(
      values.description,
      values.title,
      values.description.slice(0, 120),
      values.image
    );
  };

  useEffect(() => {
    isSuccess &&
      toast({
        description: id
          ? "Article updated successfully"
          : "Article created successfully"
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const resizeFile = (file: File) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        24,
        24,
        "JPEG",
        30,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFetchingImage(true);
    const imageUrl = await handleImageUpload(e);
    const file = e.target.files?.[0] as File;
    const resizedImage: any = await resizeFile(file);

    form.setValue("blurImage", resizedImage.split(",")[1]);
    setImagePreview(imageUrl);
    setIsFetchingImage(false);
    form.setValue("image", imageUrl);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const modules = useMemo(() => modulesObject, []);

  const editing = (
    content: string,
    delta: any,
    source: string,
    editor: any
  ) => {
    setEditorContent(content);
    form.setValue("description", content);
  };

  const handleQuillFocus = () => {
    setQuillIsFocus(true);
  };

  const handleOnBlur = () => {
    setQuillIsFocus(false);
  };

  useEffect(() => {
    if (beforeDivRef) {
      const beforeDivHeight =
        (beforeDivRef?.current?.clientHeight as number) + 30 || 0;
      const formContent = document.querySelector(
        ".form-content"
      ) as HTMLDivElement;
      if (formContent) {
        if (quillIsFocus) {
          formContent.style.marginTop = `-${beforeDivHeight}px`;
        } else {
          formContent.style.marginTop = "0";
        }
      }
    }
  }, [quillIsFocus]);

  useEffect(() => {
    if (fetchEditIsSuccess && fetchEditIsData?.data?.article) {
      const product = fetchEditIsData.data.article;
      form.reset({
        title: product.title,
        description: product.description,
        image: product.imageUrl,

        blurImage: product.imageUrl
      });
      setImagePreview(product.imageUrl);
      setEditorContent(product.description);
    }
  }, [fetchEditIsSuccess, fetchEditIsData, form]);

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:space-y-6 md:p-10 space-y-10 p-4   form-content"
        >
          <div ref={beforeDivRef} className="beforeDiv">
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Article Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="image"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Image</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center justify-center">
                      <label
                        className="absolute left-0 mx-4 h-[80%] flex items-center justify-center cursor-pointer text-center rounded-lg w-[40%] bg-blue-400"
                        htmlFor="uploadImage"
                      >
                        <div className="flex items-center text-white justify-center">
                          {isFetchingImage && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          )}
                          Upload Image
                        </div>
                      </label>
                      <Input
                        type="file"
                        id="uploadImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="py-8 border border-opacity-35"
                      />
                    </div>
                  </FormControl>
                  {imagePreview && (
                    <div className="mt-2 relative border border-opacity-25 overflow-hidden h-[100px] w-[100px] max-w-fit p-4">
                      <Image
                        src={imagePreview}
                        alt="Image Preview"
                        width={100}
                        height={100}
                      />
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-8 md:mt-0 relative">
            <div className="flex gap-2 items-center justify-center absolute -top-5 right-0">
              <label className="switch">
                <input
                  onClick={() => setQuillIsFocus(!quillIsFocus)}
                  type="checkbox"
                  checked={quillIsFocus}
                />
                <span className="slider round"></span>
              </label>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Submitting..." : "Submit"}
              </Button>
              {error && <p className="text-red-500">{error.message}</p>}
            </div>
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl
                    className={`${
                      quillIsFocus
                        ? "h-[75vh]  relative top-0 z-50"
                        : "h-[30vh]"
                    }`}
                  >
                    <ReactQuill
                      value={editorContent}
                      onChange={(content, delta, source, editor) =>
                        editing(content, delta, source, editor)
                      }
                      modules={modules}
                      theme="snow"
                      onFocus={handleQuillFocus}
                      onBlur={handleOnBlur}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

const generatePDF = async (
  quillContent: any,
  title: any,
  description: any,
  imageUrl: any
) => {
  try {
    const response = await axios.post("/api/routes/generate-pdf", {
      title,
      description,
      imageUrl,
      quillContent
    });

    if (response.data.success) {
      console.log("PDF generated successfully:", response.data.fileName);
    } else {
      console.error("Error generating PDF:", response.data.error);
    }
  } catch (error) {
    console.error("Error calling PDF generation API:", error);
  }
};
