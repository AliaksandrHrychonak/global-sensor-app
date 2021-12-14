class TokenService {
  getLocalAccessToken() {
    const localToken: string | any = localStorage.getItem("token")
    const token = JSON.parse(localToken);
    return token;
  }

  updateLocalAccessToken(token: string | any) {
    localStorage.removeItem('token')
  }

  getUser() {
    const user: string | any = localStorage.getItem("user")
    return JSON.parse(user);
  }

  // setToken(token: any) {
  //   console.log(JSON.stringify(user));
  //   localStorage.setItem("user", JSON.stringify(user));
  // }

  removeUser() {
    localStorage.removeItem("user");
  }
}

export default new TokenService();