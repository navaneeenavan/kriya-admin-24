import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { fetchWorkshopStats } from "../API/calls";
import Layout from "../components/Layout";
import workshops from "./WorkshopList";

const WorkshopReg = () => {
  const [workStats, setWorkStats] = useState(null);
  const [registrations, setRegistrations] = useState(false);
  const [workID, setWorkID] = useState(true);

  useEffect(() => {
    toast.promise(fetchWorkshopStats(), {
      loading: "Loading workshop statistics...",
      success: (res) => {
        setWorkStats(res.data?.workshopWiseCount);
        return "Workshop statistics loaded";
      },
      error: (err) => {
        console.log(err);
        return "Error loading workshop statistics";
      },
    });
  }, []);

  return (
    <Layout title={"Workshop Registrations"}>
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 w-full justify-around items-center pb-12">
        <div className="">Sort by</div>
        <button className={`px-6 py-2 rounded-full ${workID ? "bg-[#3c3c3c] text-white" : "bg-[#eaeaea] text-[#303030]"} border-2 border-[#303030]`}
          onClick={() => {
            setWorkID(true);
            setRegistrations(false);

            let temp = workStats;
            temp.sort((a, b) => a._id.localeCompare(b._id));
            setWorkStats(temp);
          }}
        >
          Workshop ID
        </button>
        <button className={`px-6 py-2 rounded-full ${registrations ? "bg-[#3c3c3c] text-white" : "bg-[#eaeaea] text-[#303030]"} border-2 border-[#303030]`}
          onClick={() => {
            setWorkID(false);
            setRegistrations(true);

            let temp = workStats;
            temp.sort((a, b) => b.count - a.count);
            setWorkStats(temp);
          }}
        >
          Registrations
        </button>
      </div>
      <div className="space-y-4 px-4 lg:px-0">
        {workStats?.map((w, index) => (
          <div>
            <div className="flex items-center">
              <div className="text-xl mr-4 lg:mr-2 w-[5%]">{index + 1}</div>
              <div className="w-[70%] lg:w-3/4">
                <p className="text-xs">{w._id}</p>
                <p className="">
                  {workshops.find((work) => w._id === work.wid).workName}
                </p>
              </div>
              <div className="text-3xl lg:text-4xl text-right font-semibold w-[20%] lg:w-[5%]">{w.count}</div>
            </div>
            <div className="w-full lg:w-[90%] h-[1px]  bg-gray-500 my-2"></div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default WorkshopReg;
