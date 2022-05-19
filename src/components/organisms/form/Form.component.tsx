import React, {FC, useEffect, useState} from 'react';

// Components
import FormField from '../../molecules/form-field/FormField.component';
import ButtonFunctional from '../../atoms/button-functional/ButtonFunctional.component';

// Data
import {navItemsMainTemplate} from '../../../data/navItems';

// Styled Components
import {Wrapper, StyledTitle} from '../users-list/UsersList.styles';

// Templates
import MainTemplate from '../../templates/main-template/MainTemplate.component';

// Model
import {FormModel} from './Form.model';


const Form: FC<FormModel> = ({handleAddUser, formValues, handleInputChange}) => {

   console.log(formValues);

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

export default Form;