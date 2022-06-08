import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import AddCompany from './pages/AddCompany/AddCompany';
import Map from './pages/Map/Map';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/layout/Header';
import Todo from './pages/Todo/Todo';

const App = () => {
  return (
    <Router>
      {/* header */}
      <Header />

      {/* de verschillende paginas er onder */}
      <Routes history={createBrowserHistory}>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kaart" element={<Map />} />
        <Route path="/nieuw" element={<AddCompany />} />
        <Route path="/todo" element={<Todo />} />

        {/* Als path niet bestaat, ga naar not found */}
        <Route path="*" exact={true} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;