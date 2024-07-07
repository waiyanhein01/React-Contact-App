import React from "react";
import {
  AuthGuard,
  DrawerComponents,
  LottieComponents,
  NavComponents,
} from "../components";

const HomePage = () => {
  return (
    <AuthGuard>
      <div>
      <div className=" bg-[#f4f8f8] h-screen w-full">
        <div className="bg-white shadow">
          <NavComponents />
        </div>
        <div className=" px-32">
          <div className=" mt-5 flex justify-end">
            <DrawerComponents />
          </div>

          <div className=" mt-5 bg-white h-[450px] border rounded overflow-y-scroll">
            <div className="">
              <LottieComponents />
            </div>
          </div>
        </div>
      </div>
    </div>
    </AuthGuard>
  );
};

export default HomePage;
