
import styled from 'styled-components';

interface IStyledButton {
	bigButton?: boolean;
}

export const StyledButton = styled.button<IStyledButton>`
  margin: 15px 0;
  padding: ${bigButton => bigButton ? '10px 38px' : '7px 20px'};
  font-size: ${({theme, bigButton}) => bigButton ? theme.fontSize.m : theme.fontSize.s};
  background-color: ${({theme}) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({theme}) => theme.colors.darkGrey};
  cursor: pointer;
`;