import { Avatar } from "@mui/material";
import React from "react";
import { useLogoutContactMutation } from "../store/services/endpoints/apiContact.endpoints";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const NavComponents = () => {
  const [logoutFun, { data, isLoading }] = useLogoutContactMutation();

  const nav = useNavigate();

  const handleLogout = async () => {
    await logoutFun(data);
    localStorage.removeItem("token");
    nav("/");
  };

  return (
    <>
      <div className=" h-16 lg:px-32 px-8 flex flex-col justify-center">
        <div className=" flex justify-between items-center">
          <h1 className="">WYH</h1>
          <div className=" flex items-center space-x-5">
            <button type="button" onClick={handleLogout} className="">
              {isLoading ? (
                <Loader2 className=" ml-2 h-6 w-6 animate-spin" />
              ) : (
                "Logout"
              )}
            </button>
            <Avatar alt="Wai Yan" src="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavComponents;
