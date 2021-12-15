import $api from "../http/index";

class AuthService {
  login(email: string, password: string) {
    return $api
      .post("/auth/login", {
        email,
        password
      })
      .then((response: { data: any }) => {
        if (response.data.accessToken) {
          localStorage.setItem("token", response.data.accessToken);
        }
        return response.data;
      });
  }

  logout() {
    localStorage.clear()
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