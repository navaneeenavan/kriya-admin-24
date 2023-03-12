import { BsCalendarEventFill } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineSpeakerphone, HiOutlinePresentationChartBar } from "react-icons/hi";
import { TfiStatsUp } from "react-icons/tfi";
import { IoTrophyOutline } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import EditWebsite from "./pages/EditWebsite";
import EventReg from "./pages/EventReg";
import PaperReg from "./pages/PaperReg";
import ReferralLeaderboard from "./pages/ReferralLeaderboard";
import Stats from "./pages/Stats";
import WorkshopReg from "./pages/WorkshopReg";
import Accommodation from "./pages/Accommodation";
import OnSpot from "./pages/OnSpot";

const NavRoutes = [
  {
    title: "Statistics",
    icon: <TfiStatsUp />,
    href: "/statistics",
    element: <Stats />,
  },
  {
    title: "Register On Spot",
    icon: <FiUserPlus />,
    href: "/register-on-spot",
    element: <OnSpot />,
  },
  {
    title: "Edit Website Content",
    icon: <BsCalendarEventFill />,
    href: "/edit-website",
    element: <EditWebsite />,
  },
  {
    title: "Referral Leaderboard",
    icon: <HiOutlineSpeakerphone />,
    href: "/referral-leaderboard",
    element: <ReferralLeaderboard />,
  },
  {
    title: "Event Registrations",
    icon: <IoTrophyOutline />,
    href: "/event-reg",
    element: <EventReg />,
  },
  {
    title: "Workshop Registrations",
    icon: <FaChalkboardTeacher />,
    href: "/workshop-reg",
    element: <WorkshopReg />,
  },
  {
    title: "Paper Registrations",
    icon: <HiOutlinePresentationChartBar />,
    href: "/paper-reg",
    element: <PaperReg />,
  },
  {
    title: "Accommodation",
    icon: <BiHome />,
    href: "/accommodation",
    element: <Accommodation />,
  },
];

export default NavRoutes;
