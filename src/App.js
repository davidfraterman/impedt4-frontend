import './App.css';

import Header from './components/UI/Header';

function App() {

  // api call from laravel
  const laravelApiTest = () => {
    fetch('http://192.168.101.207:8000/api/test')
      .then(response => response.json())
      .then(data => console.log('data', data))
      .catch(error => console.log(error))

      console.log("banaan")
  }
  
  laravelApiTest();


  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
