import React from 'react';

import axios from 'axios';
import './App.css';

import Header from './components/layout/Header';
import Todo from './pages/Todo/Todo';
// import Map from "./components/UI/Map"

function App() {

  // api call from laravel
  const laravelApiTest = () => {

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
  }
  
  // laravelApiTest();


  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
