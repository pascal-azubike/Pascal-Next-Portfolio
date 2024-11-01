import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Define types for our store
interface SearchStore {
  isOpen: boolean;
  search: string;
  searchHistory: string[];
  setOpen: (open: boolean) => void;
  setSearch: (search: string) => void;
  toggleOpen: () => void;
  addToHistory: (search: string) => void;
  clearHistory: () => void;
  removeFromHistory: (search: string) => void;
}

// Create the store
export const useSearchStore = create(
  persist<SearchStore>(
    (set) => ({
      isOpen: false,
      search: "",
      searchHistory: [],
      setOpen: (open) => set({ isOpen: open }),
      setSearch: (search) => set({ search }),
      toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
      addToHistory: (search) =>
        set((state) => ({
          searchHistory: [
            search,
            ...state.searchHistory.filter((s) => s !== search)
          ].slice(0, 5) // Keep only last 5 searches
        })),
      clearHistory: () => set({ searchHistory: [] }),
      removeFromHistory: (search) =>
        set((state) => ({
          searchHistory: state.searchHistory.filter((s) => s !== search)
        }))
    }),
    {
      name: "searchStore",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
