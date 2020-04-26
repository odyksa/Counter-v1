import axios from 'axios';

export class RandomUsersService {
  constructor() {
    this.baseUrl = "https://randomuser.me/api/";
  }

  getRandomUsers = async (quantity) => {
    const url = `?results=${quantity}`;

    return await axios.get(`${this.baseUrl}${url}`);
  }
}