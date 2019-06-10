class Auth {
  constructor() {
    this.Authenticated = false;
  }
  login(token) {
    localStorage.setItem("token", token);
  }
  logout() {
    localStorage.removeItem("token");
  }
  isAuthenticated() {
    return !!localStorage.getItem("token");
  }
}

export default new Auth();
