import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { fetchDeptWise } from "../API/calls";
import { toast } from "react-hot-toast";

const DepartmentWise = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    toast.promise(fetchDeptWise(), {
      loading: "Loading...",
      success: (data) => {
        console.log(data);
        setData(data.data);
        return "Success!";
      },
      error: (err) => {
        console.log(err);
        return "Error!" + err;
      },
    });
  }, []);

  return (
    <Layout title={"Department Wise"}>
      <div className="flex"></div>
    </Layout>
  );
};

export default DepartmentWise;
