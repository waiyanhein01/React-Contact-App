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
        <div className=" lg:px-32 px-8">
          <div className=" mt-5 flex justify-end">
            <DrawerComponents />
          </div>

          <div className=" mt-5 bg-white h-[450px] border flex items-center justify-center rounded overflow-y-scroll">
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
