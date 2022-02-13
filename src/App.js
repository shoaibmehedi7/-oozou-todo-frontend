import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { routes } from "./constants/routes";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.ROOT} element={<Landing/>} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
