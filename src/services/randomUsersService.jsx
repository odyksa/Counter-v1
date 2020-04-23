export class RandomUsersService {
  constructor() {
    this.baseUrl = "https://randomuser.me/api/";
  }

  getRandomUsers = async (quantity) => {
    const url = `?results=${quantity}`;
    const response = await fetch(`${this.baseUrl}${url}`);

    if (!response.ok) {
      throw new Error("Couldn't fetched random Users");
    }

    const body = await response.json();

    return body;
  }
}