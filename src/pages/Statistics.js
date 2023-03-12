import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { fetchStatistics } from "../API/calls";
import { toast } from "react-hot-toast";
import Row from "../components/Row";

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
    <Layout title={"Statistics"} className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 justify-center">
      <Component title="Total Users" value={stats?.userCount} />
      <Component title="Paid Users" value={stats?.paidUserCount} />
      <Component title="Total Events Registrations" value={stats?.totalEventCount} />
      <Component title="Total Workshops Registrations" value={stats?.totalWorkshopCount} />
      <Component title="Total Paper Registrations" value={stats?.totalPaperCount} />
      <Component title="Accommodation Count" value={stats?.accommodationCount} />
      <Component title="Total Referrals" value={stats?.referralCount} />
    </Layout>
  );
};

const Component = ({ title, value }) => {
  return (
    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-2">
      <h1 className="text-lg">{title}</h1>
      <p className="text-5xl font-semibold">{value}</p>
    </div>
  )
}

export default Statistics;
