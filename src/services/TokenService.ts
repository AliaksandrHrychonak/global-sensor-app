class TokenService {
  getLocalAccessToken() {
    const localToken: string | any = localStorage.getItem("token")
    const token = JSON.parse(localToken);
    return token;
  }

  updateLocalAccessToken(token: string | any) {
    localStorage.removeItem('token')
    localStorage.setItem("token", JSON.stringify(token));
  }

  setToken(token: string | any) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  clear() {
    localStorage.clear()
  }
}

export default new TokenService();