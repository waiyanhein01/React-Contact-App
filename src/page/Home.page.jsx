import React, { useState } from "react";
import {
  AuthGuard,
  DataTableComponents,
  DrawerComponents,
  LottieComponents,
  NavComponents,
} from "../components";
import { useGetContactQuery } from "../store/services/endpoints/contant.endpoinds";

const HomePage = () => {
  const { data, isLoading, isError } = useGetContactQuery();
  // console.log(data, isLoading, isError, isSuccess);


  const [open, setOpen] = React.useState(false);

  const [editData, setEditData] = useState({ edit: false, data: null });

  const handleEditBtn = (id) => {
    const ApiData = data?.contacts?.data;
    const finder = ApiData.find((i) => i.id === id);
    setEditData({ edit: true, data: finder });
    setOpen(true);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    setEditData({ edit: false, data: null });
  };

  return (
    <AuthGuard>
      <>
        <div className="h-screen w-full">
          <div className="bg-white shadow">
            <NavComponents />
          </div>
          <div className=" lg:px-32 px-8">
            <div className=" mt-5 flex justify-end">
              <DrawerComponents
                editData={editData}
                toggleDrawer={toggleDrawer}
                open={open}
                setOpen={setOpen}
              />
            </div>

            <div className=" mt-5 bg-white border h-[450px] flex items-center justify-center rounded overflow-y-scroll">
              {data?.contacts?.data?.length > 0 ? (
                <div div className="w-full">
                  <DataTableComponents
                    handleEditBtn={handleEditBtn}
                    tableData={data?.contacts?.data}
                  />
                </div>
              ) : (
                <>
                  <LottieComponents />
                </>
              )}
            </div>       
          </div>
        </div>
      </>
    </AuthGuard>
  );
};

export default HomePage;
