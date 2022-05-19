import {FC} from 'react';
import styled from 'styled-components';

interface IStyledButton {
   submit: boolean
}

export const StyledButton = styled.button.attrs<IStyledButton>(({submit}) => ({
   type: submit ? 'submit' : ''
}))`
  margin: 15px 0;
  padding: 7px 20px;
  font-size: ${({theme}) => theme.fontSize.s};
  background-color: ${({theme}) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({theme}) => theme.colors.darkGrey};
  cursor: pointer;
`;

interface IButton {
   children: any
   type?: "submit"
}

const ButtonFunctional: FC<IButton> = ({children, type}) => {
   return (
      <StyledButton type={type}>
         {children}
      </StyledButton>
   )
}

export default ButtonFunctional