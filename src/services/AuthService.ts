import axios from "axios";
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
    return $api.post('/auth/logout')
    .then(() => {
      localStorage.clear()
    })
  }

  register(name: string, surname: string, email: string, password: string) {
    return $api.post("/auth/registration", {
      name,
      surname,
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
  refresh() {
    return axios.get("https://api-global-sensor.monster/auth/refresh", {withCredentials: true})
    .then((response: any) => {
      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
      }
      return response.data;
    });
  }

  loginGoogle() {
    return $api.get('auth/google')
    .then((data) => {
      console.log(data);
    })
  }

}

export default new AuthService();