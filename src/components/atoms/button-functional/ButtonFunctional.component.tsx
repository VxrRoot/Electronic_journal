import {FC} from 'react'

// Components
import {StyledButton} from './ButtonFunctional.styles';

// Model
import {ModelButtonFunctional} from './ModelButtonFunctional';

const ButtonFunctional: FC<ModelButtonFunctional> = ({children, type, isBig}) => {
   return (
      <StyledButton
         type={type === "submit" ? 'submit' : undefined}
         bigButton={isBig}
      >
         {children}
      </StyledButton>
   )
}

export default ButtonFunctional