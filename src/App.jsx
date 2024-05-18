import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./layout/NavBar";
import HomePage from "./pages/HomePage";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/addUser" element={<AddUser />} />
          <Route exact path="/editUser/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
