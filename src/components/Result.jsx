import { Box, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  width: 100v;
  height: 45vh;
`;

const Result = () => {
  let [src, setSrc] = useState("");

  let { html, css, js } = useContext(DataContext);

  const srcCode = `

      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>

      `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container>
      <iframe srcdoc={src} sandbox="allow-scripts" width="100%" height="100%" />
    </Container>
  );
};

export default Result;
