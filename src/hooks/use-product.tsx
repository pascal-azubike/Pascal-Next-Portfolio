import { Product } from "@/app/Admin/manage-products/components/columns";
import { create } from "zustand";

interface ProductStore {
  products: Product[];
  setProducts: (newProducts: Product[]) => void;
  removeProduct: (productId: string) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],

  setProducts: (newProducts) => {
    set({ products: newProducts });
  },

  removeProduct: (productId) => {
    console.log(productId)
    set((state) => ({
      products: state.products.filter((product) => product._id !== productId)
    }));
  }
}));
