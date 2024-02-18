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
  background-color: #1d1e22;
  padding: 8px 10px;
  border-top: 5px solid #34363e;
  align-items: center;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  color: #aaaebc;
  font-weight: 500;
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  color: white;
  background-color: color;
  justify-content: space-between;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
`;

const Editor = ({ language, sign, color, value, onChange }) => {
  let [close, setClose] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container style={close ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            style={{
              backgroundColor: color,
              padding: "2px 0px",
              placeContent: "center",
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
          onClick={() => setClose((prev) => !prev)}
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
