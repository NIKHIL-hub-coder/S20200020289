import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import TrainList from "./components/Trains/TrainList"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from "./components/auth/Register"
import Book from './components/Book/Book';
import DataApp from './components/DataApp';

function App() {
  return (
    <>
    <BrowserRouter>  
      <DataApp>
      <div className="App">
              <Navbar/>

              <Routes>
                  <Route path="/" element={<TrainList/> }/>
                  <Route path="/train" element={ <TrainList/>}/>
                  <Route path="/book" element={ <Book/>}/>
                  <Route path="/login" element={ <Login/>}/>
                  <Route path="/register" element={ <Register/>}/>
                  
              </Routes>

              
      </div>
      </DataApp>

     </BrowserRouter>
    </>
  
  );
}

export default App;
