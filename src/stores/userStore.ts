import { createStore } from 'zustand'

export interface UserProps {
  userNumber: number
}

export interface UserState extends UserProps {
  addUser: () => void
}

export const createUserStore = (initProps?: Partial<UserProps>) => {
  const DEFAULT_PROPS: UserProps = {
    userNumber: 0,
  }
  return createStore<UserState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addUser: () => set((state) => ({ userNumber: ++state.userNumber })),
  }))
}
export type UserStore = ReturnType<typeof createUserStore>
