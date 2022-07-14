import {FC} from 'react'

// Components
import UsersList from '../../components/organisms/users-list/UsersListComponent';

// Templates
import MainTemplate from '../../components/templates/main-template/MainTemplate.component';

// Model
import {DashboardModel} from './Dashboard.model';

const Dashboard: FC<DashboardModel> = () => {
   return (
      <MainTemplate>
         <UsersList />
      </MainTemplate>
   )
}

export default Dashboard