import styled from 'styled-components';
import {
   BrowserRouter,
   Routes,
   Route,
   Navigate
} from 'react-router-dom';

// Global Styles
import {GlobalStyle} from '../styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles/theme';

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
               <Wrapper>
                  <Routes>
                     <Route
                        path="/"
                        element={<Navigate to="/group/A" />}
                     />
                     <Route
                        path="/group/:id"
                        element={<Dashboard />}
                     />
                     <Route
                        path="/add-user"
                        element={<AddUser />}
                     />
                  </Routes>
               </Wrapper>
         </ThemeProvider>
      </BrowserRouter>
  );
}

export default Root;
