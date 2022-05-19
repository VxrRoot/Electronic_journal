import styled from 'styled-components';

interface IInput {
   name: string;
   id: string;
   type: string;
}

export const Input = styled.input<IInput>`
  padding: 5px 8px;
  border: 1px solid ${({theme}) => theme.colors.darkPurple};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  
  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;