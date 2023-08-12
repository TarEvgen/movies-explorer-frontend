import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Navigation from "../Navigation/Navigation";

//import ProtectedRoute from "./ProtectedRoute";

function App() {


  const [isOpenMenuNavigation, setOpenMenuNavigation] = useState(false);

  function openMenuNavigation () {
    setOpenMenuNavigation(true)
  }




  return (
    <div className="App">
      <Header openMenu = {openMenuNavigation} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Movies />
              <Footer />
            </>
          }
        />
        <Route path="/sign-up" element={<Register />} />

        <Route path="/sign-in" element={<Login />} />
      </Routes>
      <Navigation isOpen={isOpenMenuNavigation} />
    </div>
  );
}

export default App;
