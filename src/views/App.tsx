import React, {Fragment} from 'react';
import styled from 'styled-components';

// Global Styles
import {GlobalStyle} from '../styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles/theme';

// Components
import UsersList from 'components/organisms/users-list/UsersList.component';

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
     <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
           <UsersList />
        </Wrapper>
     </ThemeProvider>

  );
}

export default Root;
