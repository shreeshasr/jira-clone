import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import BoardStatus from './Components/BoardStatus/BoardStatus';
import MainBody from './Components/MainBody/MainBody';
import SideNavbar from './Components/SideNavbar/SideNavbar';

function App() {
  return (
    <div className="App">
      <SideNavbar/>
      <div className="right">
        <Routes>
          <Route path="/board" element={<MainBody Component={<BoardStatus/>} option="Kanban Board"/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
