import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import axios from 'axios';
import './App.css';
import React from 'react';


import Login from './pages/Auth/Auth';
/*
import Header from './components/UI/Header';
import Map from "./components/UI/Map"
*/
function App() {

  // api call from laravel
/*  const laravelApiTest = () => {

    axios.get('http://127.0.0.1:8000/api/bedrijven')
      .then(res => {
        const bedrijven = res.data;
        // console.log([bedrijven[0].latitude, bedrijven[0].longitude]);
        // return(bedrijven);
      }) 

    

    // fetch('http://127.0.0.1:8000/api/bedrijven')
    //   .then(response => response.json())
    //   .then(data => console.log('data', data))
    //   .catch(error => console.log(error))

      // console.log("banaan")
  } */
  
  // laravelApiTest();


  return (
    <div className="App">
      <Login></Login>
      <Routes history={createBrowserHistory}>
        <Route exact to="/login" component={Login} />
      </Routes>
    </div>
  );
}

export default App;
