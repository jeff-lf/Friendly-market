<<<<<<< HEAD
import "./App.css";
import { Filters } from "./components/Filters";

function App() {
  return (
    <>
      <h1>Oi!</h1>
      <Filters/>
    </>
=======
import { ToastContainer } from "react-toastify";
import Routes from "./routes";

function App() {
  return (
    <div>
      <Routes />
      <ToastContainer />
    </div>
>>>>>>> 1a9ebd317097e560fef65127d6c5a0e6da596e91
  );
}

export default App;
