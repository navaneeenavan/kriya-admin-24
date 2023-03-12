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
    <Layout title={"Statistics"} className="space-y-8">
      <Row>
        <div className="w-1/2 space-y-2">
          <h1 className="text-lg">Total Users</h1>
          <p className="text-5xl font-semibold">{stats?.userCount}</p>
        </div>
        <div className="w-1/2 space-y-2">
          <h1 className="text-lg">Paid Users</h1>
          <p className="text-5xl font-semibold">{stats?.paidUserCount}</p>
        </div>
      </Row>
      <Row>
        <div className="w-1/2 space-y-2">
          <h1 className="text-lg">Total Events Registrations</h1>
          <p className="text-5xl font-semibold">{stats?.totalEventCount}</p>
        </div>
        <div className="w-1/2 space-y-2">
          <h1 className="text-lg">Total Workshops Registrations</h1>
          <p className="text-5xl font-semibold">{stats?.totalWorkshopCount}</p>
        </div>
      </Row>
      <Row>
        <div className="w-1/2 space-y-2">
          <h1 className="text-lg">Total Paper Registrations</h1>
          <p className="text-5xl font-semibold">{stats?.totalPaperCount}</p>
        </div>
        <div className="w-1/2 space-y-2">
          <h1 className="text-lg">Accommodation Count</h1>
          <p className="text-5xl font-semibold">{stats?.accommodationCount}</p>
        </div>
      </Row>
      <Row>
        <div className="w-1/2 space-y-2">
          <h1 className="text-lg">Total Referrals</h1>
          <p className="text-5xl font-semibold">{stats?.referralCount}</p>
        </div>
      </Row>
    </Layout>
  );
};

export default Statistics;
