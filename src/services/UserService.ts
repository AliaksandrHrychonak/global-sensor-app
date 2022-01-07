import $api from "../http/index";

class UserService {
  getUserMe() {
    return $api
      .get("/user/me")
      .then((response: any) => {
        return response.data;
      });
  }

  feedbackContactForm(fullname: any, email: any, message: any) { 
    return $api
      .post("/contact", {fullname, email, message})
      .then((response: any) => {
        return response.data;
      });
  }

  updateUser() { 

  }

  updatePassword() { 

  }

}

export default new UserService();