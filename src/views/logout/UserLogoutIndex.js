import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const UserLogoutIndex = () => {
  let history = useHistory();
  useEffect(() => {
    localStorage.clear();
    history.push("/user-login");
  }, []);

  return <></>;
};

export default UserLogoutIndex;
