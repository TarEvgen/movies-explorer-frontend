import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Navigation from "../Navigation/Navigation";

//import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Header />
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
      <Navigation />
    </div>
  );
}

export default App;
