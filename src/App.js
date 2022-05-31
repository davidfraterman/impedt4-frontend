import './App.css';

import Header from './components/UI/Header';

function App() {

  // api call from laravel
  const laravelApiTest = () => {
    fetch('localhost:8000/api/test')
      .then(response => response.json())
      .then(data => console.log('data', data))
      .catch(error => console.log(error))
  }
  
  laravelApiTest();


  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
