import { useEffect, useState } from "react";
import Router from "next/router";

function RouteProgress() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let hideTimer;

    const onStart = () => {
      clearTimeout(hideTimer);
      setActive(true);
    };

    const onDone = () => {
      // Keep it visible for a short moment to avoid flicker on fast routes.
      hideTimer = setTimeout(() => setActive(false), 180);
    };

    Router.events.on("routeChangeStart", onStart);
    Router.events.on("routeChangeComplete", onDone);
    Router.events.on("routeChangeError", onDone);

    return () => {
      clearTimeout(hideTimer);
      Router.events.off("routeChangeStart", onStart);
      Router.events.off("routeChangeComplete", onDone);
      Router.events.off("routeChangeError", onDone);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: active ? "100%" : "0%",
        height: "3px",
        zIndex: 9999,
        background: "#c9961a",
        boxShadow: active ? "0 0 12px rgba(252,163,17,0.7)" : "none",
        transition: active
          ? "width 0.35s ease-out, box-shadow 0.2s ease-out"
          : "width 0.25s ease-in, box-shadow 0.25s ease-in",
      }}
    />
  );
}

export default RouteProgress;
