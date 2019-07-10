import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button className="btn btn-light"
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button className="btn btn-danger" onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default LoginButton;
