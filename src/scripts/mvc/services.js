import { BASE_URL } from "../constants/url";

export class UserService {
  getListUsers = async () => {
    const response = await fetch(`${BASE_URL}users`);
    const users = await response.json();
    return users;
  };
  getUserById = async (id) => {
    const response = await fetch(`${BASE_URL}users/${id}`);
    const user = await response.json();
    return user;
  };
}
