import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/types/productos";
import { toast } from "sonner";

interface CartStore {
  items: ProductType[];
  addItem: (data: ProductType) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: ProductType) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id == data.id);

        if (existingItem) {
          // Mostrar un mensaje simple de error
          toast("El producto ya existe");
          return;
        }

        set({
          items: [...get().items, data],
        });
        toast("Producto añadido al carrito");
      },
      removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        // Mostrar un mensaje de éxito
        toast("Producto eliminado del carrito");
      },
      removeAll: () => {
        set({ items: [] });
        // Mostrar un mensaje de éxito
        toast("Todos los productos han sido eliminados");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
