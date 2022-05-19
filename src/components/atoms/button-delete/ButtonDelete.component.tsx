import {FC} from 'react';

// Assets
import {ReactComponent as DeleteIcon} from 'assets/icons/delete-icon.svg';

// Styled Components
import {StyledButton} from './ButtonDelete.styles';

// Models
import {ButtonDeleteModel} from './ButtonDelete.model';

const Button: FC<ButtonDeleteModel> = ({onClick}) => {
   return (
      <StyledButton onClick={onClick}>
         <DeleteIcon />
      </StyledButton>
   )
}

export default Button;