import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/Manage_User/Login";
import Signup from "./Components/Manage_User/Signup";
import ToDo from "./Components/Manage_User/ToDo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ToDo />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
