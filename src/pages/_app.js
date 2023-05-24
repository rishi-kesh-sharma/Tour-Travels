import "@/styles/globals.css";

import "../styles/nprogress.css";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const Router = useRouter();
  useEffect(() => {
    const handleRouteStart = () => {
      NProgress.start();
    };
    const handleRouteDone = () => {
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  return <Component {...pageProps} />;
}
