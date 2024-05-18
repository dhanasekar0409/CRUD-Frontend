import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/addUser" element={<AddUser />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
