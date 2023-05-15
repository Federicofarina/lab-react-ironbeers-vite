import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import NewBeer from './components/NewBeer';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/new" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
