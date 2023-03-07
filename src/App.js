import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavRoutes from "./Navroutes";
import EditEvent from "./pages/EditEvent";
import PortalWrapper from "./pages/PortalWrapper";
import "./styles/tailwind.output.css";

const App = () => {
  return (
    <React.Fragment>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PortalWrapper />}>
            {NavRoutes.map((n) => (
              <Route path={n.href} element={n.element} />
            ))}
            <Route path="*" element={<p>gfdgd</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
