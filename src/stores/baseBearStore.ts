import { create } from "zustand";

type BaseBearStoreState = {
  bears: number;
  color: string;
  size: string;
  increasePopulation: () => void;
  removeAllBears: () => void;
  changeSize: (size: string) => void;
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
    changeSize: (size: string) => {
      console.log("change size: ", size)
      set({ size })
    },
  })
);
