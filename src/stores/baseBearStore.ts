import { create } from "zustand";

type BaseBearStoreState = {
  bears: number;
  color: string;
  size: string;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const useBaseBearStore = create<BaseBearStoreState>()(
  (set) => ({
    bears: 0,
    color: "red",
    size: "big",
    increasePopulation: () =>
      set((state) => ({
        bears: state.bears + 1,
      })),
    removeAllBears: () => set({ bears: 0 }),
  })
);
