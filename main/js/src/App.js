import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Modalform from './components/Modal';

const App = () => {
  return (
    <div className="App">
      <Homepage />
      <Modalform />
    </div>
  );
};
export default App;
