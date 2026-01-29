import { BrowserRouter } from "react-router";
import "./App.css";

import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Dashboard from "./page/Dashboard";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
