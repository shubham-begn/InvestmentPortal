import './App.css';
import {Routes, Route } from "react-router-dom";
import Register from './pages/Registerpage'
import Loginpage from './pages/Loginpage';
import ClientHomePage from './pages/ClientHomePage';
function App() {
  return (
    <div className='app'>
    <Routes>
       <Route path='/' element={<h1>Home Page</h1>}></Route>
       <Route path='/login' element={<Loginpage></Loginpage>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/client-dashboard' element={<ClientHomePage></ClientHomePage>} />
    </Routes>
    </div>
  );
}

export default App;
