import React from "react";
import useDeviceDetection from "../../utils/hooks/useDeviceDetection";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {
  const { isMobile } = useDeviceDetection();
  return <>{isMobile ? "" : <NavbarDesktop />}</>;
};

export default Navbar;
