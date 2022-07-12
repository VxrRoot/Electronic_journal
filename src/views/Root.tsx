import styled from 'styled-components';
import {
   BrowserRouter,
      Routes,
      Route,
} from "react-router-dom";

// Global Styles
import {GlobalStyle} from '../styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles/theme';

// Context
import UsersProvider from 'providers/UsersProvider.provider';

// Views
import Dashboard from './dashboard/Dashboard.view';
import AddUser from './add-user/AddUser.view';

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

const Root = () => {

   return (
      <BrowserRouter>
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <UsersProvider>
               <Wrapper>
                  <Routes>
                     <Route
                        path="/"
                        element={<Dashboard />}
                     />
                     <Route
                        path="/add-user"
                        element={<AddUser />}
                     />
                  </Routes>
               </Wrapper>
            </UsersProvider>
         </ThemeProvider>
      </BrowserRouter>
  );
}

export default Root;
