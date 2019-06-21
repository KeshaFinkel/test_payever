import {UserInterface} from './user.interface';

export interface UserListInterface {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserInterface[];
}
