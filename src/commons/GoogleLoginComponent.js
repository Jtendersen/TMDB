import React, { useContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { UserSuccessContext } from "../utils/UserSuccessContext";

const GoogleLoginComponent = () => {
  const userSuccess = useContext(UserSuccessContext);

  function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
    userSuccess.setUserSuccess(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "888021537079-1tbg2pfc396062qf2gan0hfa78pepuqo.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
};

export default GoogleLoginComponent;
