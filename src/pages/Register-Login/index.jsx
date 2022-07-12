import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Header } from "../../components/Header";
import Login from "../../components/Login";
import Register from "../../components/Register";
import { StyledContainer } from "./style";
import { Redirect } from "react-router-dom";

export const LoginOrRegister = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return value === index && children;
  };

  const token = localStorage.getItem("@Market:token");
  if (token) {
    return <Redirect to="/perfil" />;
  }

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
