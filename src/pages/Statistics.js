import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { fetchStatistics } from "../API/calls";
import { toast } from "react-hot-toast";
import Row from "../components/Row";
import workshops from "./WorkshopList";
import events from "./EventList";

const Statistics = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    toast.promise(fetchStatistics(), {
      loading: "Loading statistics...",
      success: (res) => {
        setStats(res.data);
        return "Statistics loaded";
      },
      error: (err) => {
        console.log(err);
        return "Error loading statistics";
      },
    });
  }, []);

  return (
    <Layout title={"Statistics"}>
      <Row>
        <div className="w-1/2">
          <h1 className="text-lg">Total Users</h1>
          <p className="text-5xl font-semibold">{stats?.userCount}</p>
        </div>
        <div className="w-1/2">
          <h1 className="text-lg">Paid Users</h1>
          <p className="text-5xl font-semibold">{stats?.paidUserCount}</p>
        </div>
      </Row>
      <h1 className="text-lg my-8">Workshop Count</h1>
      <div className="grid grid-cols-2 gap-4 gap-x-8">
        {stats?.workshopWiseCount?.map((w) => (
          <div className="flex justify-between items-center">
            <div className="">
              <p className="text-sm">{w._id}</p>
              <p className="text-lg">
                {workshops.find((work) => w._id === work.wid).workName}
              </p>
            </div>
            <div className="text-5xl font-semibold ">{w.count}</div>
          </div>
        ))}
      </div>
      <h1 className="text-lg my-8">Event Count</h1>
      <div className="grid grid-cols-2 gap-4 gap-x-8">
        {stats?.eventWiseCount?.map((e) => (
          <div className="flex justify-between items-center">
            <div className="">
              <p className="text-sm">{e._id}</p>
              <p className="text-lg">
                {events.find((work) => e._id === work.eventId).eventName}
              </p>
            </div>
            <div className="text-5xl font-semibold ">{e.count}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Statistics;
