import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Command, Clock, X, Search, Trash2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useSearchStore } from "@/hooks/use-search-store";
import { useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

const GlobalSearch = () => {
  const router = useRouter();
  const {
    isOpen,
    search,
    searchHistory,
    setOpen,
    setSearch,
    toggleOpen,
    addToHistory,
    removeFromHistory,
    clearHistory
  } = useSearchStore();

  const { data: searchResults, isLoading } = useQuery({
    queryKey: ["search", search],
    queryFn: async () => {
      if (search.length < 2) return [];
      const response = await fetch(`/api/routes/search?q=${search}`);
      const data = await response.json();
      if (search.length >= 3) {
        addToHistory(search);
      }
      return data;
    },
    enabled: search.length >= 2
  });

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggleOpen();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggleOpen]);

  const showHistory = search.length < 2 && searchHistory.length > 0;

  const handleResultClick = async (result: any) => {
    setOpen(false);
    // Convert the title to a URL-friendly slug

    // Navigate to the blog post
    await router.push(`/blogs/${result._id}`);
  };

  return (
    <>
      <div className="fixed right-4 top-4 hidden sm:block">
        <TooltipProvider>
          <Tooltip defaultOpen delayDuration={0}>
            <TooltipTrigger asChild>
              <div></div>
            </TooltipTrigger>
            <TooltipContent
              className="z-[9999] bg-gray-800 mt-[80px] mr-[40px] text-zinc-100 px-4 py-2.5 border border-zinc-700 shadow-lg"
              sideOffset={5}
              side="top"
            >
              <div className="text-sm flex flex-col gap-1 font-medium">
                <p>Press <kbd className="px-2 py-1 bg-zinc-700 rounded">⌘K</kbd> (Mac) or <kbd className="px-2 py-1 bg-zinc-700 rounded">Ctrl+K</kbd> (Windows) to search</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="p-0 bg-[#1a1b1e] border border-gray-400 shadow-2xl rounded-xl overflow-hidden">
          <div className="flex flex-col">
            <div className="border-b border-zinc-800 px-4 py-3">
              <div className="flex items-center gap-3 relative">
                <Search className="h-5 w-5 text-zinc-400" />
                <Input
                  placeholder="Type to search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 border-0 bg-transparent px-0 py-1.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-0"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            <div className="max-h-[400px] overflow-y-auto">
              {showHistory ? (
                <div className="p-2 space-y-1">
                  <div className="flex items-center justify-between px-2 py-1.5 text-sm text-zinc-500">
                    <span>Recent Searches</span>
                    <button
                      onClick={clearHistory}
                      className="flex items-center gap-1 text-xs hover:text-zinc-300 transition-colors"
                    >
                      <Trash2 className="h-3 w-3" />
                      Clear all
                    </button>
                  </div>
                  {searchHistory.map((item) => (
                    <button
                      key={item}
                      className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-zinc-300 hover:bg-zinc-800/70"
                      onClick={() => setSearch(item)}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-zinc-500" />
                        <span>{item}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFromHistory(item);
                        }}
                        className="text-zinc-500 hover:text-zinc-300 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </button>
                  ))}
                </div>
              ) : isLoading ? (
                <div className="px-4 py-12 text-center text-sm text-zinc-500">
                  Loading...
                </div>
              ) : !searchResults?.results?.length ? (
                <div className="px-4 py-12 text-center text-sm text-zinc-500">
                  No results found.
                </div>
              ) : (
                <div className="p-2 space-y-1">
                  {searchResults?.results?.map((result: any) => (
                    <button
                      key={result.id}
                      className="w-full flex flex-col gap-1 rounded-lg bg-zinc-800/50 px-3 py-2 text-left hover:bg-zinc-800"
                      onClick={() => handleResultClick(result)}
                    >
                      <span className="text-sm text-zinc-100">
                        {result.title}
                      </span>
                      {result.shortSummary && (
                        <span className="text-xs text-zinc-500 line-clamp-1">
                          {result.shortSummary}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GlobalSearch;
