import { createStore } from 'zustand/vanilla'
import { useStore } from 'zustand'
export type PriceStoreState = {
  price: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newPrice: number) => void;
};
/** create store  state & actions*/
export const priceCountStore = createStore<PriceStoreState>()((set) => ({
  price: 0,
  increasePopulation: () => set((state) => ({ price: state.price+1 })),
  removeAllBears: () => set({ price: 0 }),
  updateBears: (newPrice: number) => set({ price: newPrice })
}));

type Selector<T, U> = (state: T) => U;
export const usePriceStore = <U>(selector: Selector<PriceStoreState, U>) => useStore(priceCountStore, selector)


// export const createUserStore = (initProps?: Partial<UserProps>) => {
//   const DEFAULT_PROPS: UserProps = {
//     userNumber: 0,
//   }
//   return createStore<PriceStoreState>()((set) => ({
//     price: 0,
//     increasePopulation: () => set((state) => ({ price: state.price+1 })),
//     removeAllBears: () => set({ price: 0 }),
//     updateBears: (newPrice: number) => set({ price: newPrice })
//   }))
// }