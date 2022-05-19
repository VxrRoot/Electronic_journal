import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import {
   BrowserRouter,
      Routes,
      Route,
} from "react-router-dom";
import {Link} from 'react-router-dom';

// Global Styles
import {GlobalStyle} from '../styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles/theme';

// Components
import UsersListComponent from '../components/organisms/users-list/UsersListComponent';
import Form from '../components/organisms/form/Form.component';
import {users as usersData} from '../data/users';

const Wrapper = styled.div`
  background: {
    color: #f7f8fa;
  };
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

interface IUser {
   name: string;
   attendance: string;
   average: string;
}

const initialFormState = {
   name: '',
   average: '',
   attendance: ''
}

const Root = () => {

   const [users, setUsers] = useState<IUser[]>(usersData);
   const [formValues, setFormValues] = useState(initialFormState)

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({
         ...formValues,
         [e.target.name]: e.target.value,
      })
   }

   const deleteUser = (name: string) => {
      const filtredUsers = users.filter(user => user.name !== name);
      setUsers(filtredUsers);
   }

   const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newUser = {
         name: formValues.name,
         attendance: formValues.attendance,
         average: formValues.average
      }

      setUsers(prev => [newUser, ...prev])

      console.log("clear form");

      setFormValues(initialFormState)
   }

   return (
      <BrowserRouter>
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wrapper>
               <Routes>
                  <Route
                     path="/"
                     element={<UsersListComponent users={users} deleteUser={deleteUser}/>}
                  />
                  <Route
                     path="/add-user"
                     element={<Form formValues={formValues} handleInputChange={handleInputChange} handleAddUser={handleAddUser} />}
                  />
               </Routes>
            </Wrapper>
         </ThemeProvider>
      </BrowserRouter>
  );
}

export default Root;
