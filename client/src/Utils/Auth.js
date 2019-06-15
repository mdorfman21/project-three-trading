import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "dev-5l542vbb.auth0.com",
    clientID: "gMR2p1ERgmU3aFpRWf4i07kFhp3ROUw4",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
