import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";

//import ProtectedRoute from "./ProtectedRoute";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

      <Route path='/' element={
     
     <Main />
      
      } />
      <Route
              path="/sign-up"
              element={
                <Register
                  
                />
              }
            />

<Route
              path="/sign-in"
              element={
                <Login
                  
                />
              }
            />




              
      </Routes>



      
    </div>
  );
}

export default App;
