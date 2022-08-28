import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Icon } from '@iconify/react';
import Header from './Components/Header/Header';
import Breakfast from './Components/Pages/Breakfast/Breakfast';
import Lunch from './Components/Pages/Lunch/Lunch';
import Dinner from './Components/Pages/Dinner/Dinner';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/icon' element={<Icon></Icon>}></Route>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
