import 
   React,
   {
      FC,
      useContext,  
      useReducer
} from 'react';

// Components
import FormField from '../../components/molecules/form-field/FormField.component';
import ButtonFunctional from '../../components/atoms/button-functional/ButtonFunctional.component';

// Data
import {navItemsMainTemplate} from '../../data/navItems';

// Styled Components
import {Wrapper, StyledTitle} from './AddUser.styles';

// Hooks
import UseForm from 'views/add-user/UseAddUser.hook';

// Templates
import MainTemplate from '../../components/templates/main-template/MainTemplate.component';

// Model
import {AddUserModel} from './AddUser.model';


const AddUser: FC<AddUserModel> = () => {

   const {
      formValues,
      handleAddUser,
      handleInputChange
   } = UseForm();

   return (
      <MainTemplate>
         <Wrapper
            as="form"
            onSubmit={handleAddUser}
         >
            <StyledTitle>Add new student</StyledTitle>
            <FormField
               label="Name"
               name="name"
               id="name"
               onChange={handleInputChange}
               value={formValues.name}
            />
            <FormField
               label="Attendance"
               name="attendance"
               id="attendance"
               onChange={handleInputChange}
               value={formValues.attendance}
            />
            <FormField
               label="Average"
               name="average"
               id="average"
               onChange={handleInputChange}
               value={formValues.average}
            />
            <ButtonFunctional
               type="submit"
            >
               Add
            </ButtonFunctional>
         </Wrapper>
      </MainTemplate>

   );
}

export default AddUser;
