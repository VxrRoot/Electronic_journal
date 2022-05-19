interface IUsersListItemModel {
   name: string;
   average: string;
   attendance: string;
   deleteUser: (name: string) => void;
}

export type UsersListItemModel = IUsersListItemModel;