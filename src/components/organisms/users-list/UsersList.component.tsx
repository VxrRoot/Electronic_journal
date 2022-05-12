import {FC} from 'react';

// Styled Components
import {Wrapper, StyledList} from './UsersList.styles';

// Data
import {users} from 'data/users';

// Components
import UsersListItem from 'components/molecules/users-list-item/UsersListItem.component';

const UsersListComponent: FC = () => {
      return (
         <Wrapper>
            <StyledList>
               {users.map(({name, average, attendance}) => (
                  <UsersListItem
                     name={name}
                     attendance={attendance}
                     average={average}
                  />
               ))}
            </StyledList>
         </Wrapper>
      );
}

export default UsersListComponent;