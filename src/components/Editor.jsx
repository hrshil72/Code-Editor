import { Box, styled } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

const Span = styled(Box)`
  background-color: #ff3c41;
  padding: 2px 0px;
  place-content: center;
  text-align: center;
  border-radius: 5px;
  height: 20px;
  width: 20px;
  margin: 5px;
`;

const Heading = styled(Box)`
  display: flex;
  background-color: #1d1e22;
  align-items: center;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  color: #aaaebc;
  font-weight: 600;
`;

const Header = styled(Box)`
  display: flex;
  color: white;
  background-color: #1d1e22;
  justify-content: space-between;
`;

const Container = styled(Box)``;

const Editor = () => {
  return (
    <Container>
      <Header>
        <Heading>
          <Span component="span">/</Span>
          HTML
        </Heading>
        <SettingsIcon />
      </Header>
      <ControlledEditor
        options={{
          theme: "material",
          lineNumbers: true,
        }}
        className="controlled-editor"
      />
    </Container>
  );
};

export default Editor;
