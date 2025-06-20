// data/useItemStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useItemStore = create(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({ items: [item, ...state.items] })),
      deleteItem: (name) =>
        set((state) => ({
          items: state.items.filter((item) => item.name !== name),
        })),
    }),
    {
      name: "item-storage",
    }
  )
);

export default useItemStore;
