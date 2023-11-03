import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Bill from './Bill';
import { useState } from 'react';
import ClockNav from './ClockNav';
import FoodCard from './FoodCard';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddToBill = (item) => {
    setSelectedItems([...selectedItems, item]);
  };
  
  return (
    <div className="App max-vw-100">
      <BrowserRouter>
        <ClockNav />
        <div className='row justify-content-center'>
          <div className='col-8'>
          <FoodCard onAddToBill={handleAddToBill} restaurants={restaurants} setRestaurants={setRestaurants} />
          </div>
          <div className='col-2'>
            <Bill selectedItems={selectedItems} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;