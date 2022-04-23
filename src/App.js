import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/Manage_User/Login";
import RequireAuth from "./Components/Manage_User/RequireAuth";
import ResetPass from "./Components/Manage_User/ResetPass";
import Signup from "./Components/Manage_User/Signup";
import ToDo from "./Components/ToDo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <ToDo />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/resetPass" element={<ResetPass />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
