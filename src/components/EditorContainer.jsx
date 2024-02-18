import React from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider";
import { useContext } from "react";

const Container = styled(Box)`
  background-color: #060606;
  display: flex;
  justify-content: space-evenly;
  padding: 0px 10px 15px 10px;
  position: relative;
  overflow: hidden;
`;

const EditorContainer = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        language="HTML"
        sign="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        language="CSS"
        sign="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <Editor
        language="JS"
        sign="()"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default EditorContainer;
