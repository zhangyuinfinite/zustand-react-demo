import { create } from 'zustand'
type TBearStoreState = {
  price: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newPrice: number) => void;
};
/** create store  state & actions*/
export const usePriceCount = create<TBearStoreState>()((set) => ({
  price: 0,
  increasePopulation: () => set((state) => ({ price: state.price+1 })),
  removeAllBears: () => set({ price: 0 }),
  updateBears: (newPrice: number) => set({ price: newPrice })
}))

/** 深层嵌套的数据 */
/**
 * 方法：第一种用扩展运算符 将新的和旧的合并在一起，第二种用immer 还有其他的一些方法
 */
