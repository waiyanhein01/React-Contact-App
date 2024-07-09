import React from "react";
import {
  AuthGuard,
  DataTableComponents,
  DataTableListsComponents,
  DrawerComponents,
  LottieComponents,
  NavComponents,
} from "../components";
import { useGetContactQuery } from "../store/services/endpoints/contant.endpoinds";

const HomePage = () => {
  const { data, isLoading, isError, isSuccess } = useGetContactQuery();
  console.log(data, isLoading, isError, isSuccess);

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
                {data?.contacts?.data?.length > 0 ? (
                  <>
                    <DataTableComponents/>
                  </>
                ) : (
                  <>
                    {" "}
                    <LottieComponents />
                  </>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default HomePage;
