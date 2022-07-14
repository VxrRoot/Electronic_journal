import {FC, useContext, useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

// Styled Components
import {Wrapper, StyledList, StyledTitle, OuterWrapper} from './UsersList.styles';

// Components
import UsersListItem from 'components/molecules/users-list-item/UsersListItem.component';

// Model
import {UsersListModel} from './UsersList.model';

interface IUser {
   name: string;
   attendance: string;
   average: string;
}

const UsersListComponent: FC<UsersListModel> = () => {
   const [students, setStudents] = useState<IUser[]>([]);
   const [groups, setGroups] = useState<string[]>([])
   const {id} = useParams();
   
   useEffect(() => {
      axios
         .get('/groups')
         .then(({data}) => setGroups(data.groups))
         .catch(err => console.log(err))
   }, [])
   
   console.log(id);
   
   useEffect(() => {
      axios
         .get(`/students/${id}`)
         .then(({data}) => setStudents(data.students))
         .catch(err => console.log(err))
   }, [id, groups])
   
   return (
      <OuterWrapper>
         <Wrapper>
            <nav>
               {groups.map(group => (
                  <Link
                     to={`/group/${group}`}
                     key={group}
                  >
                     {group}
                  </Link>
               ))}
            </nav>
            <StyledTitle>Students List</StyledTitle>
            <StyledList>
               {students.map(({name, average, attendance}, idx) => (
                  <UsersListItem
                     key={idx}
                     name={name}
                     attendance={attendance}
                     average={average}
                     deleteUser={() => {}}
                  />
               ))}
            </StyledList>
         </Wrapper>
      </OuterWrapper>
   );
}

export default UsersListComponent;