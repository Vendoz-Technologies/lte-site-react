import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import sal from "sal.js";
import Theme from "../components/common/theme";
import SEO from "../components/seo";
import { MouseMoveProvider } from "../contexts/mouse-move-context";
import "../styles/index.scss";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    sal({ threshold: 0.1, once: true });
  }, [router.asPath]);

  useEffect(() => {
    sal();
  }, []);
  return (
    <React.Fragment>
      <SEO font="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Spartan:wght@400;500;600;700;800&display=swap" />
      <ThemeProvider defaultTheme="light">
        <MouseMoveProvider>
          <Component {...pageProps} />
        </MouseMoveProvider>
        <Theme />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
