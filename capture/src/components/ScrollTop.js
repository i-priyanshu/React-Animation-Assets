import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "../pages/Aboutus";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  });

  return null;
};

export default ScrollTop;
