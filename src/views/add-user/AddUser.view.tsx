import 
   React,
   {
      FC,
      useContext,
      useState
} from 'react';

// Components
import FormField from '../../components/molecules/form-field/FormField.component';
import ButtonFunctional from '../../components/atoms/button-functional/ButtonFunctional.component';

// context
import {UsersContext} from 'providers/UsersProvider.provider';

// Data
import {navItemsMainTemplate} from '../../data/navItems';

// Styled Components
import {Wrapper, StyledTitle} from './AddUser.styles';

// Templates
import MainTemplate from '../../components/templates/main-template/MainTemplate.component';

// Model
import {AddUserModel} from './AddUser.model';

const AddUser: FC<AddUserModel> = () => {

   const initialFormState = {
      name: '',
      average: '',
      attendance: ''
   }

   const [formValues, setFormValues] = useState(initialFormState)

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({
         ...formValues,
         [e.target.name]: e.target.value,
      })
   }

   const {
       handleSubmitUser
   } = useContext(UsersContext)

   const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newUser = {
         name: formValues.name,
         attendance: formValues.attendance,
         average: formValues.average
      }

      handleSubmitUser(newUser)

      setFormValues(initialFormState)
   }

   return (
      <MainTemplate navItems={navItemsMainTemplate}>
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
