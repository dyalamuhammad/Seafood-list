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
        <div className='row '>
          <div className='col-md-5 col-sm-5 col-lg-8 col-12 align-self-center'>
          <FoodCard onAddToBill={handleAddToBill} restaurants={restaurants} setRestaurants={setRestaurants} />
          </div>
          <div className='col-auto col-lg-2'>
            <Bill selectedItems={selectedItems} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;