import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Register from "../Register/Register";
//import ProtectedRoute from "./ProtectedRoute";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route
              path="/sign-up"
              element={
                <Register
                  
                />
              }
            />
              
      </Routes>



   {/*   <Routes>


      <Route
              path="/"
              element={
                <ProtectedRoute
                  
                />
              }
            />

      </Routes>
    */}
      
    </div>
  );
}

export default App;
