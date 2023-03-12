import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { fetchReferralStats } from "../API/calls";
import Layout from "../components/Layout";
import referralList from "./ReferralList";

const ReferralLeaderboard = () => {
  const [referralStats, setReferralStats] = useState(null);

  useEffect(() => {
    toast.promise(fetchReferralStats(), {
      loading: "Loading referral stats...",
      success: (res) => {
        setReferralStats(res.data.referralStats);
        return "Referral stats loaded";
      },
      error: (err) => {
        console.log(err);
        return "Error loading referral stats";
      },
    });
  }, []);


  return (
    <Layout title={"Referral Codes Leaderboard"}>
      <div className="space-y-4">
        {referralStats?.map((r, index) => {
          return (
            <div>
              <div className="flex items-center">
                <div className="text-xl mr-2 w-[5%]">{index + 1}</div>
                <div className="w-3/4">
                  <p className="text-xs">{r._id}</p>
                  <p className="">{referralList.find((rr) => r._id === rr.code).name}</p>
                </div>
                <div className="text-4xl font-semibold">{r.count}</div>
              </div>
              <div className="w-[90%] h-[1px] bg-gray-500 my-2"></div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default ReferralLeaderboard;
