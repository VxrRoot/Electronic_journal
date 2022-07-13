import { 
   useReducer,
   useContext
 } from 'react';

 // context
import {UsersContext} from 'providers/UsersProvider.provider';

// Types
import {
   TypeReducerAction,
   TypeReducerState
} from './AddUser.model';

const initialFormState = {
   name: '',
   average: '',
   attendance: ''
}

const UseForm = () => {
   
   const reducer = (state: TypeReducerState, action: TypeReducerAction) => {
      switch(action.type) {
         case 'INPUT CHANGE':
            return {
               ...state,
               [action.field]: action.value
            }
         case 'CLEAR VALUES':
            return initialFormState
         default:
            return state;
      }
   }

   const [formValues, dispatch] = useReducer(reducer, initialFormState)

// Input change

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
         type: 'INPUT CHANGE',
         field: e.target.name,
         value: e.target.value
      })
   }

   const {
       handleSubmitUser
   } = useContext(UsersContext)

// Add User

   const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const newUser = {
         name: formValues.name,
         attendance: formValues.attendance,
         average: formValues.average
      }

      handleSubmitUser(newUser)

      dispatch({
         type: "CLEAR VALUES",
         field: '',
         value: ''
      })
   }

   return {
      handleAddUser,
      handleInputChange,
      formValues
   }
}

export default UseForm;