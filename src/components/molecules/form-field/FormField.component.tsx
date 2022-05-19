import {FC} from 'react';
import styled from 'styled-components';

// Components
import {Label} from '../../atoms/label/Label.styles';
import {Input} from '../../atoms/input/Input.styles';

// Model
import {FormFieldModel} from './FormField.model';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  ${Label} {
    margin: 10px 0;
  }
`;


const FormField: FC<FormFieldModel> = ({label ,name, id, type = 'text', onChange, value}) => {
   return (
      <Wrapper>
         <Label htmlFor={id}>
            {label}
         </Label>
         <Input
            onChange={(e) => onChange(e)}
            name={name}
            id={id}
            type={type}
            value={value}
         />
      </Wrapper>
   );
}

export default FormField