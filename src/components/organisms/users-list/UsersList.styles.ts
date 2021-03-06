import styled from 'styled-components';

export const OuterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 30px 40px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0,0,0,0.3);
  margin: 25px;
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const StyledTitle = styled.h1`
  color: ${({theme}) => theme.colors.darkGrey};
  font-size: ${({theme}) => theme.fontSize.xxl};
`