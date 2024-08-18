import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-20 w-20 border-8 border-blue-500 border-t-transparent"></div>
    </div>
  );
};

export default Spinner;
