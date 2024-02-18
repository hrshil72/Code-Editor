import React from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  background-color: #060606;
  display: flex;
  justify-content: space-evenly;
  padding: 15px 10px;
`;

const EditorContainer = () => {
  return (
    <Container>
      <Editor />
      <Editor />
      <Editor />
    </Container>
  );
};

export default EditorContainer;
