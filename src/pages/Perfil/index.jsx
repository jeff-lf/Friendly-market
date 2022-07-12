import DataUser from "../../components/DataUser";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import MyProducts from "../../components/MyProducts/index"

const Perfil = () => {
  localStorage.setItem("@Market:token", "blablabla");

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (newValue) => {
    setTabValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return value === index && children;
  };

  return (
    <>
      <Header />
      <MyProducts/>
      {/* <Tabs value={tabValue} onChange={handleChange} variant="fullWidth">
        <Tab value="0" label="Meus dados" />
        <Tab value="1" label="Meus produtos" />
        <Tab value="2" label="Histórico" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Container>
          <DataUser />
        </Container>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Container>
          <DataUser />
        </Container>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Container>
          <DataUser />
        </Container>
      </TabPanel> */}
    </>
  );
};
export default Perfil;
