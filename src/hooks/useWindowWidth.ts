import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // console.log(width);

      // Small Screen
      if (width <= 375) {
        setIsSmallScreen(true);
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(false);
        setIsWideScreen(false);
      }

      // Mobile
      if (width >= 375 && width < 768) {
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
        setIsSmallScreen(false);
        setIsWideScreen(false);
      }

      // Tablet
      if (width >= 768 && width < 1024) {
        setIsTablet(true);
        setIsDesktop(false);
        setIsMobile(false);
        setIsSmallScreen(false);
        setIsWideScreen(false);
      }

      // Laptop
      if (width >= 1024) {
        setIsDesktop(true);
        setIsTablet(false);
        setIsMobile(false);
        setIsSmallScreen(false);
        setIsWideScreen(false);
      }

      // WideScreen
      if (width >= 1324) {
        setIsWideScreen(true);
        setIsDesktop(false);
        setIsTablet(false);
        setIsMobile(false);
        setIsSmallScreen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log({ isMobile, isTablet, isDesktop, isSmallScreen, isWideScreen });

  return {
    isSmallScreen,
    isMobile,
    isTablet,
    isDesktop,
    isWideScreen,
  };
}
