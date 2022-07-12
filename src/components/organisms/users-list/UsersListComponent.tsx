import {FC, useContext} from 'react';

// Context
import {UsersContext} from 'providers/UsersProvider.provider';

// Styled Components
import {Wrapper, StyledList, StyledTitle, OuterWrapper} from './UsersList.styles';

// Components
import UsersListItem from 'components/molecules/users-list-item/UsersListItem.component';

// Model
import {UsersListModel} from './UsersList.model';

const UsersListComponent: FC<UsersListModel> = () => {
   const {
      deleteUser,
      users
   } = useContext(UsersContext);
   return (
      <OuterWrapper>
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
      </OuterWrapper>
   );
}

export default UsersListComponent;