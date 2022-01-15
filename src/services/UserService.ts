import $api from '../http/index'
import { AuthResponse } from '../models/response/AuthResponse'

class UserService {
  getUserMe() {
    return $api.get<AuthResponse>('/user/me').then((response: any) => {
      return response.data
    })
  }

  feedbackContactForm(fullname: any, email: any, message: any) {
    return $api.post('/contact', { fullname, email, message }).then((response: any) => {
      return response.data
    })
  }

  updateUser(name: string, surname: string) {
    return $api.patch<AuthResponse>('/user/me', { name, surname }).then((response: any) => {
      return response.data
    })
  }
  updateAvatar(File: any) {
    let file = new FormData()
    file.append('file', File)

    return $api
      .post<AuthResponse>('/user/me/avatar', file, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response: any) => {
        return response.data
      })
  }

  updatePassword() {}
}

export default new UserService()
