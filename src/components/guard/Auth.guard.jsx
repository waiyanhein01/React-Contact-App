import React, { useEffect } from "react";
import { useProfileQuery } from "../../store/services/endpoints/apiContact.endpoints";
import LoaderComponents from "../Loader.components";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ check, token, path="/", children }) => {
  const nav = useNavigate();
  const { isError, data, isLoading } = useProfileQuery();
  useEffect(() => {
    if (check) {
      localStorage.setItem("token", JSON.stringify(token));
    } else if (isError) {
      nav(path);
    }else if(data) {
        nav("/home")
    }
  }, [check, data, isError]);
  return <>{isLoading ? <LoaderComponents /> : <>{children}</>}</>;
};

export default AuthGuard;
