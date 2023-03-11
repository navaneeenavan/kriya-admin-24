import React from "react";

const Layout = ({ title, className, children }) => {
  return (
    <div className="w-full h-full overflow-y-auto px-[calc(100vw/24)] py-8 font-poppins">
      <h1 className="text-4xl font-semibold text-gray-700 mb-12">{title}</h1>
      <div className={`w-full ${className}`}>{children}</div>
    </div>
  );
};

export default Layout;
