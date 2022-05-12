import {FC} from 'react';

// Assets
import {ReactComponent as DeleteIcon} from 'assets/icons/delete-icon.svg';

// Styled Components
import {StyledButton} from './ButtonDelete.styles';

const Button: FC = () => {
   return (
      <StyledButton>
         <DeleteIcon />
      </StyledButton>
   )
}

export default Button;