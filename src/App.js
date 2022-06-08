import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/AuthPage/AuthPage';
import Home from './pages/HomePage/HomePage';
import AddCompany from './pages/AddCompanyPage/AddCompanyPage';
import Map from './pages/MapPage/MapPage';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import Header from './components/layout/Header';
import Todo from './pages/TodoPage/TodoPage';

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