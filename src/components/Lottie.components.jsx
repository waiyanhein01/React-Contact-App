import React from "react";
import Lottie from "lottie-react";
import Empty from "../lottie/Empty.json";

const lottieComponents = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center">
        <Lottie animationData={Empty} loop={true} className=" w-80"/>
        <h1 className=" text-xl font-semibold text-slate-400">There is no list...</h1>
      </div>
    </div>
  );
};

export default lottieComponents;
