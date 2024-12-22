import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-row content-center justify-center">
      {children}
    </div>
  );
};

export default DefaultLayout;