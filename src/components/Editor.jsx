import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { useState } from "react";

const Heading = styled(Box)`
  display: flex;
  /* background-color: #1d1e22; */
  background-color: #07182e;
  padding: 5px 0;
  width: 100px;
  border-top: 4px solid #34363e;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  color: #aaaebc;
  font-weight: 500;
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
`;

const Editor = ({ language, sign, color, value, onChange }) => {
  let [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            style={{
              backgroundColor: color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: "center",
              borderRadius: "5px",
              height: "20px",
              width: "20px",
              margin: "5px",
              color: "#1D1E22",
              fontSize: "15px",
            }}
            component="span">
            {sign}
          </Box>
          {language}
        </Heading>
        <CloseFullscreenIcon
          fontSize="small"
          onClick={() => setOpen((prev) => !prev)}
        />
      </Header>
      <ControlledEditor
        value={value}
        onBeforeChange={handleChange}
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
