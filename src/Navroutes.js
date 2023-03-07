import { BsCalendarEventFill } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import EditEvent from "./pages/EditEvent";

const NavRoutes = [
  {
    title: "Edit Events",
    icon: <BsCalendarEventFill />,
    href: "/edit-events",
    element: <EditEvent />,
  },
  {
    title: "Register On Spot",
    icon: <FiUserPlus />,
    href: "/register-on-spot",
    element: <div>Chumma</div>,
  },
];

export default NavRoutes;
