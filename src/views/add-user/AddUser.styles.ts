import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 30px 40px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0,0,0,0.3);
  margin: 25px;
`;

export const StyledTitle = styled.h1`
  color: ${({theme}) => theme.colors.darkGrey};
  font-size: ${({theme}) => theme.fontSize.xxl};
`