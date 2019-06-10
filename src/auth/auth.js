class Auth {
  constructor() {
    this.Authenticated = false;
  }
  login(token) {
    localStorage.setItem("token", token);
  }
  logout(cb) {
    localStorage.removeItem("token");
    cb();
  }
  isAuthenticated() {
    return !!localStorage.getItem("token");
  }
}

export default new Auth();
