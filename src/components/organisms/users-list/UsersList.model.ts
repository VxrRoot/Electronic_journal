interface IUsersListModel {
   users: {
      name: string;
      attendance: string;
      average: string;
   }[]
   deleteUser: (name: string) => void
}

export type UsersListModel = IUsersListModel;