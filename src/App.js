import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Register from "./components/Register";
import Routes from "./routes";

function App() {
  return (
    <div>
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
