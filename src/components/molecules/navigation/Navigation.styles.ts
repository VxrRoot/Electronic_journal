import styled from 'styled-components';

export const StyledNav = styled.div`
  width: 150px;
  height: 100%;
  padding: 20px 0;
  border-right: 1px solid ${({theme}) => theme.colors.darkPurple};
	grid-row: 1 / 3;
	grid-column: 1 / 1;
  
  nav {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const StyledLogo = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.darkGrey};
  padding: 13px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  
  p {
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSize.l};
    font-weight: bold;
    padding: 0;
    margin: 0;
  }
`;