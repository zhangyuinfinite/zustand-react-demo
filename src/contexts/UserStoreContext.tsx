import { createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand';
import { UserStore, createUserStore, UserProps, UserState } from '../stores/userStore'
export const UserContext = createContext<UserStore | null>(null)
type BearProviderProps = React.PropsWithChildren<UserProps>;
export function UserProvider({ children, ...props }: BearProviderProps) {
  const storeRef = useRef<UserStore>()
  if (!storeRef.current) {
    storeRef.current = createUserStore(props)
  }
  return (
    <UserContext.Provider value={storeRef.current}>
      {children}
    </UserContext.Provider>
  )
}
export function useUserContext<T>(selector: (state: UserState) => T): T {
  const store = useContext(UserContext)
  if (!store) throw new Error('Missing UserContext.Provider in the tree')
  return useStore(store, selector)
}