import $api from "../http/index";
import TokenService from "./TokenService";

class AuthService {
  login(username: string, password: string) {
    return $api
      .post("/auth/signin", {
        username,
        password
      })
      .then((response: { data: { accessToken: any; }; }) => {
        // if (response.data.accessToken) {
        //   TokenService.setUser(response.data);
        // }

        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  register(email: string, password: string) {
    return $api.post("/auth/registration", {
      email,
      password
    })
    .then((response: any) => {
      if (response.data.userData.accessToken) {
        localStorage.setItem("token", response.data.userData.accessToken);
      }
      return response.data.userData;
    });
  }
}

export default new AuthService();