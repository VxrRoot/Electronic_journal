import styled from 'styled-components';

interface IStyledButton {
   option?: 'primary' | 'secondary';
}

export const StyledButton = styled.button<IStyledButton>`
  width: 23px;
  height: 23px;
  background-color: ${({option, theme}) => option && option === 'secondary' ? '#e7e044' : theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    cursor: pointer;
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`;