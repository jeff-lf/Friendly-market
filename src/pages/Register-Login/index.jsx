import { Box, Tab, Tabs } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { Header } from "../../components/Header";
import Login from "../../components/Login";
import Register from "../../components/Register";
import { StyledContainer } from "./style";

export const LoginOrRegister = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return value === index && children;
  };

  return (
    <>
      <Header />
      <StyledContainer>
        <Box className="formContainer">
          <Box className="tabs">
            <Tabs value={selectedTab} onChange={handleChange}>
              <Tab
                sx={{
                  border: 1,
                  borderBottom: 3,
                  width: 150,
                }}
                label="Login"
              />
              <Tab
                sx={{
                  border: 1,
                  borderBottom: 3,
                  width: 150,
                }}
                label="Cadastro"
              />
            </Tabs>
          </Box>
          <TabPanel value={selectedTab} index={0}>
            <Login />
          </TabPanel>
          <TabPanel value={selectedTab} index={1}>
            <Register />
          </TabPanel>
        </Box>
      </StyledContainer>
    </>
  );
};
