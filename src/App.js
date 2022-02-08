import "./App.css";
import "antd/dist/antd.css";
import Defaultlayout from "./components/DefaultLayout";
import Login from "./components/Pages/Login";
import HeaderComponent from "./components/Common/Header";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Defaultlayout />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
