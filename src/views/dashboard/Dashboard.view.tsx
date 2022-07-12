import {FC} from 'react'

// Components
import UsersList from '../../components/organisms/users-list/UsersListComponent';

// Templates
import MainTemplate from '../../components/templates/main-template/MainTemplate.component';

// Data
import {navItemsMainTemplate} from '../../data/navItems';

// Model
import {DashboardModel} from './Dashboard.model';

const Dashboard: FC<DashboardModel> = () => {
   return (
      <MainTemplate navItems={navItemsMainTemplate}>
         <UsersList />
      </MainTemplate>
   )
}

export default Dashboard