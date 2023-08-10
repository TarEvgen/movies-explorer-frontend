import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';

//import ProtectedRoute from "./ProtectedRoute";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

      <Route path='/' element={
     
     <Main />
      
      } />
      <Route path='/movies' element={
     
     <Movies />
     
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
      <Footer />



      
    </div>
  );
}

export default App;
