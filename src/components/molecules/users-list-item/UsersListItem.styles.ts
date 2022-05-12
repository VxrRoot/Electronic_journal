import styled from 'styled-components';

interface IStyledAverage {
   color: 'success' | 'error' | 'warning'
}

export const Wrapper = styled.li`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding: 33px 0;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const StyledUserInfo = styled.div`
  margin-right: 14px;
  h1 {
    font-size: ${({theme}) => theme.fontSize.l};
    margin: 0;
    color: ${({theme}) => theme.colors.darkGrey};
  }
  p {
    margin: 0;
    font-size: ${({theme}) => theme.fontSize.m};
    color: ${({theme}) => theme.colors.darkGrey}
  }
`;

export const StyledAverage = styled.div<IStyledAverage>`
  margin-right: 24px;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  color: ${({theme}) => theme.colors.white};
  font:{
    size: ${({theme}) => theme.fontSize.m};
  };
  font-weight: 700;
  background-color: ${({theme, color}) => color === 'error' 
         ? theme.colors.error : color === 'success' 
         ? theme.colors.success : theme.colors.warning};
  display: flex;
  justify-content: center;
  align-items: center;
`;