import { useState, useEffect } from "react";

export const capitalizeFirst = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const convertKtoF = (kelvin) => {
  return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
};

export const getRandomSize = () => {
  const width = Math.floor(Math.random() * 4 + 1) * 100; // Random width between 100 and 400
  const height = Math.floor(Math.random() * 4 + 1) * 50; // Random height between 50 and 200
  return { width, height };
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};
