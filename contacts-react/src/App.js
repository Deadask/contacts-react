import './App.css';

import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import AddContact from './components/AddContact';
import Home from './components/Home';
import EditContact from './components/EditContact';
import Error from './components/Error';

const App = () => {
  return (
    <div className="App">

      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddContact/>}/>
        <Route path='/edit/:id' element={<EditContact/>}/>
        <Route path='/*' element={<Error/>}/>        
      </Routes>
        
    </div>
  );
}

export default App;
