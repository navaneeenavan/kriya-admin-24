import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavRoutes from "../Navroutes";

const PortalWrapper = () => {
  return (
    <section className="w-screen lg:h-screen overflow-y-auto flex font-poppins">
      <div className="hidden lg:block lg:w-1/2 bg-teal-100 px-[calc(100vw/12)] lg:px-[calc(100vw/24)] py-8 shadow-xl relative z-10">
        <div className="flex justify-between items-center">
          <div
            className="w-24 lg:w-36 h-24 lg:h-36 aspect-square"
            style={{
              background: "url(/assets/Kriya_KLA_Logo_Final.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-teal-500 w-[40%] text-right">
            Admin Dashboard
          </h1>
        </div>
        <div className="flex flex-wrap gap-6 mt-12 justify-center">
          {NavRoutes.map((nav) => (
            <NavItem title={nav.title} icon={nav.icon} href={nav.href} />
          ))}
        </div>
      </div>
      <main className="w-full lg:w-1/2 bg-gray-100 h-screen">
        <Outlet />
      </main>
    </section>
  );
};

const NavItem = ({ title, href, icon }) => {
  return (
    <Link
      to={href}
      className="shadow-xl aspect-video h-32 rounded-xl border-[4px] hover:bg-teal-500 hover:bg-opacity-10  border-teal-400 group "
    >
      <div className="w-full h-full relative p-4 [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
        <h1 className="text-xl [line-height:1.75rem] text-teal-600 font-semibold w-[60%] ">
          {title}
        </h1>
        {React.cloneElement(icon, {
          className:
            "text-8xl transition-all group-hover:-translate-y-[10%] absolute -bottom-4 right-4 text-teal-400 opacity-40",
        })}
      </div>
    </Link>
  );
};

export default PortalWrapper;
