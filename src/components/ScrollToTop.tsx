import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    if (import.meta.env.MODE === "test") {
      return;
    }

    try {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch {
      // jsdom does not implement window.scrollTo during tests.
    }
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
