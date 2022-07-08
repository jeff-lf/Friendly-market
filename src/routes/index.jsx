import { Route, Switch } from "react-router-dom";
import Providers from "../contexts";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Providers>
          <Home />
        </Providers>
      </Route>
    </Switch>
  );
};

export default Routes;
