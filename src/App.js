import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Icon } from '@iconify/react';
import Header from './Components/Header/Header';
import Breakfast from './Components/Pages/Breakfast/Breakfast';
import Lunch from './Components/Pages/Lunch/Lunch';
import Dinner from './Components/Pages/Dinner/Dinner';

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
      </Routes>
    </div>
  );
}

export default App;
