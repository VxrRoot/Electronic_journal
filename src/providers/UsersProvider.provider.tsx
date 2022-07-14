import {
   createContext,
   useState,
   useEffect
} from 'react'
import axios from 'axios';

interface IUser {
   name: string;
   attendance: string;
   average: string;
}

interface usersContextInterface {
   users: IUser[],
   handleSubmitUser: (newUser: IUser) => void,
   deleteUser: (name: string) => void
}

export const UsersContext = createContext<usersContextInterface>({
   users: [],
   handleSubmitUser: () => {},
   deleteUser: () => {}
})

 const UsersProvider = ({children}: {children: JSX.Element}) => {

   const [users, setUsers] = useState<IUser[]>([]);
   
   useEffect( () => {
      axios.get('/students')
         .then(({data}) => setUsers(data.students))
         .catch(err => err)
   }, [])
   
   const deleteUser = (name: string) => {
      const filtredUsers = users.filter(user => user.name !== name);
      setUsers(filtredUsers);
   }

   const handleSubmitUser = (newUser: IUser) => {
      setUsers(prev => [newUser, ...prev])
   }

   return (
      <UsersContext.Provider
         value={{
            users,
            handleSubmitUser,
            deleteUser
         }}
      >
         {children}
      </UsersContext.Provider>
   );
 }

 export default UsersProvider;