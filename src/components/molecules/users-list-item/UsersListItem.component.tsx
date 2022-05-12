import {FC} from 'react';

// Styled Components
import {Wrapper, StyledAverage, StyledUserInfo} from './UsersListItem.styles';

// Models
import {UsersListItemModel} from './UsersListItem.model';

// Components
import Button from 'components/atoms/button-delete/ButtonDelete.component';

const UsersListItem: FC<UsersListItemModel> = ({average,name,attendance}) => {
   return (
      <Wrapper>
         <StyledAverage
            color={average > 4 ? 'success' : average > 3 ? 'warning' : 'error'}
         >
            {average}
         </StyledAverage>
         <StyledUserInfo>
            <h1>{name}</h1>
            <p>attendance: {attendance}</p>
         </StyledUserInfo>
         <Button />
      </Wrapper>
   );
};

export default UsersListItem;
