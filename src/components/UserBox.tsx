import { UserProvider, useUserContext } from '../contexts/UserStoreContext';
export const UserNumber = () => {
  const userNumber = useUserContext(state => state.userNumber);
  const addUser = useUserContext(state => state.addUser);
  return (
    <div className="box">
      <p>用户数量: {userNumber}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={addUser}>add User</button>
      </div>
    </div>
  );
};

export const UserBox = () => {
  return (
    <div className="box">
      <UserProvider userNumber={10}>
        <UserNumber/>
      </UserProvider>
    </div>
  );
};
