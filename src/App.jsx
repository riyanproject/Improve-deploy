import React, { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Player from './Components/Player/Player';
import { auth } from './firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Player1 from './Components/Player1/Player1';
import Inventory from './Components/Inventory/Inventory';  // Import the Inventory component

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    return () => {}; // Clean up function to replace Firebase authentication logic
  }, [navigate]);

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='/player1/:id' element={<Player1 />} />
        <Route path='/inventory' element={<Inventory />} />  {/* Add the Inventory route */}
      </Routes>
    </div>
  );
};

export default App;
