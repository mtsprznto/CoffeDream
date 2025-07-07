import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/types/productos";
import { toast } from "sonner";

interface UseLovedProductsType {
  lovedItems: ProductType[];
  addLoveItem: (data: ProductType) => void;
  removeLovedItem: (id: number) => void;
}

export const useLovedProducts = create(
  persist<UseLovedProductsType>(
    (set, get) => ({
      lovedItems: [],
      addLoveItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id == data.id
        );

        if (existingItem) {
          toast("El producto ya existe 🖊️");
          return;
        }

        set({
            lovedItems: [...get().lovedItems, data],
        });
        toast("Producto añadido al carrito 💝");
      },

      removeLovedItem: (id: number) => {
        set({ lovedItems: [...get().lovedItems.filter((item) => item.id !== id)] });
        // Mostrar un mensaje de éxito
        toast("Producto eliminado 📡");
      },

    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
