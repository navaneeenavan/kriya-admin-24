import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { fetchCertificate } from "../API/calls";
import { toast } from "react-hot-toast";
import Row from "../components/Row";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";

const CertificateInfo = () => {
  const PSG_COLLEGE = `PSG College of Technology (Autonomous), Peelamedu, Coimbatore District 641004`;

  const [date, setDate] = useState(24);
  const [psg, setPsg] = useState([]);
  const [nonPsg, setNonPsg] = useState([]);

  const fetchData = () => {
    toast.promise(fetchCertificate(date), {
      loading: "Loading...",
      success: (res) => {
        const _psg = [];
        const _nonPsg = [];
        const data = res.data;

        data.sort((a, b) => {
          if (a.kriyaId < b.kriyaId) {
            return -1;
          }
          if (a.kriyaId > b.kriyaId) {
            return 1;
          }
          return 0;
        });

        data.forEach((value) => {
          if (value.college === PSG_COLLEGE) {
            _psg.push(value);
          } else {
            _nonPsg.push(value);
          }
        });
        setPsg(_psg);
        setNonPsg(_nonPsg);
        return "Loaded Successfully!";
      },
      error: (err) => {
        return err.response.data.error;
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout title={"Certificate Info"}>
      <Row>
        <Dropdown
          valueState={[date, setDate]}
          title="Select Date"
          options={[24, 25, 26]}
        />
        <Button
          text="Refresh"
          handleClick={(e) => {
            fetchData();
          }}
        />
      </Row>
      <div className={"mt-16"}>
        <p className="text-2xl font-bold pb-4">PSG Students</p>
        <div className="flex flex-row text-center">
          <p className="w-[10%] lg:w-[5%] font-semibold">No.</p>
          <p className="w-[50%] lg:w-[10%] font-semibold">Kriya ID</p>
          <p className="hidden lg:block w-[10%] font-semibold">Name</p>
          <p className="hidden lg:block w-[20%] font-semibold">Email</p>
          <p className="hidden lg:block w-[20%] font-semibold">College</p>
          <p className="hidden lg:block w-[20%] font-semibold">Department</p>
          <p className="hidden lg:block w-[5%] font-semibold">Year</p>
          <p className="w-[20%] lg:w-[10%] font-semibold">Phone</p>
        </div>
        {psg &&
          psg.map((item, index) => (
            <div className="flex flex-row text-sm text-center py-2 border-b border-gray-500">
              <p className="w-[10%] lg:w-[5%] break-all">{index + 1}.</p>
              <p className="w-[50%] lg:w-[10%] break-all">{item.kriyaId}</p>
              <p className="hidden lg:block w-[10%] break-all">{item.name}</p>
              <p className="hidden lg:block w-[20%] px-2 break-all">
                {item.email}
              </p>
              <p className="hidden lg:block w-[20%] break-all">
                {item.college}
              </p>
              <p className="hidden lg:block w-[20%] break-all">
                {item.department}
              </p>
              <p className="hidden lg:block w-[5%] break-all">{item.year}</p>
              <p className="w-[20%] lg:w-[10%] break-all">{item.phone}</p>
            </div>
          ))}
      </div>

      <div className={"mt-16"}>
        <p className="text-2xl font-bold pb-4">Non PSG Students</p>
        <div className="flex flex-row text-center">
          <p className="w-[10%] lg:w-[5%] font-semibold">No.</p>
          <p className="w-[50%] lg:w-[10%] font-semibold">Kriya ID</p>
          <p className="hidden lg:block w-[10%] font-semibold">Name</p>
          <p className="hidden lg:block w-[20%] font-semibold">Email</p>
          <p className="hidden lg:block w-[20%] font-semibold">College</p>
          <p className="hidden lg:block w-[20%] font-semibold">Department</p>
          <p className="hidden lg:block w-[5%] font-semibold">Year</p>
          <p className="w-[20%] lg:w-[10%] font-semibold">Phone</p>
        </div>
        {nonPsg &&
          nonPsg.map((item, index) => (
            <div className="flex flex-row text-sm text-center py-2 border-b border-gray-500">
              <p className="w-[10%] lg:w-[5%] break-all">{index + 1}.</p>
              <p className="w-[50%] lg:w-[10%] break-all">{item.kriyaId}</p>
              <p className="hidden lg:block w-[10%] break-all">{item.name}</p>
              <p className="hidden lg:block w-[20%] px-2 break-all">
                {item.email}
              </p>
              <p className="hidden lg:block w-[20%] break-all">
                {item.college}
              </p>
              <p className="hidden lg:block w-[20%] break-all">
                {item.department}
              </p>
              <p className="hidden lg:block w-[5%] break-all">{item.year}</p>
              <p className="w-[20%] lg:w-[10%] break-all">{item.phone}</p>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default CertificateInfo;
