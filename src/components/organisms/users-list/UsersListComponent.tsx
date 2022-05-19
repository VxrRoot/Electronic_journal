import React, {FC, useEffect, useState} from 'react';

// Styled Components
import {Wrapper, StyledList, StyledTitle} from './UsersList.styles';

// Data
import {navItemsMainTemplate} from '../../../data/navItems';

// Components
import UsersListItem from 'components/molecules/users-list-item/UsersListItem.component';
import MainTemplate from '../../templates/main-template/MainTemplate.component';

// Model
import {UsersListModel} from './UsersList.model';

const UsersListComponent: FC<UsersListModel> = ({users, deleteUser}) => {
   return (
      <MainTemplate navItems={navItemsMainTemplate}>
         <Wrapper>
            <StyledTitle>Students List</StyledTitle>
            <StyledList>
               {users.map(({name, average, attendance}, idx) => (
                  <UsersListItem
                     key={idx}
                     name={name}
                     attendance={attendance}
                     average={average}
                     deleteUser={deleteUser}
                  />
               ))}
            </StyledList>
         </Wrapper>
      </MainTemplate>
   );
}

export default UsersListComponent;