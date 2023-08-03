import './App.css';
import { Routes } from "react-router-dom";
import Header from "../Header/Header";
//import ProtectedRoute from "./ProtectedRoute";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
              
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
