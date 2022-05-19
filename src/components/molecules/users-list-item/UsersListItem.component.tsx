import {FC} from 'react';

// Styled Components
import {Wrapper, StyledAverage, StyledUserInfo} from './UsersListItem.styles';

// Models
import {UsersListItemModel} from './UsersListItem.model';

// Components
import Button from 'components/atoms/button-delete/ButtonDelete.component';

const UsersListItem: FC<UsersListItemModel> = ({average,name,attendance, deleteUser}) => {

   return (
      <Wrapper>
         <StyledAverage
            color={Number(average) > 4 ? 'success' : Number(average) > 3 ? 'warning' : 'error'}
         >
            {average}
         </StyledAverage>
         <StyledUserInfo>
            <h1>{name}</h1>
            <p>attendance: {attendance}</p>
         </StyledUserInfo>
         <Button onClick={() => deleteUser(name)} />
      </Wrapper>
   );
};

export default UsersListItem;
