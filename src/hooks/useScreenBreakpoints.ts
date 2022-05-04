import { useEffect, useState } from "react";

const useScreenBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState({
    lg: window.innerWidth >= 1024,
    md: window.innerWidth <= 660,
    sm: window.innerWidth <= 400,
  });

  useEffect(() => {
    const getSizes = () => {
      const sizes = {
        lg: window.innerWidth >= 1024,
        md: window.innerWidth <= 660,
        sm: window.innerWidth <= 400,
      };
      setBreakpoints(sizes);
    };

    window.addEventListener("resize", getSizes);
    return () => window.removeEventListener("resize", getSizes);
  }, []);

  return breakpoints;
};

export default useScreenBreakpoints;
