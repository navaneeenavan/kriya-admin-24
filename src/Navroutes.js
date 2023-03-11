import { BsBarChartLine, BsCalendarEventFill } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import OnSpotRegistration from "./pages/OnSpotRegistration";
import Statistics from "./pages/Statistics";

const NavRoutes = [
  {
    title: "Register On Spot",
    icon: <FiUserPlus />,
    href: "/register-on-spot",
    element: <OnSpotRegistration />,
  },
  {
    title: "Statistics",
    icon: <BsBarChartLine />,
    href: "/statistics",
    element: <Statistics />,
  },
];

export default NavRoutes;
