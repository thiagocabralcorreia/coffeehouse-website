import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/shop' exact component={Shop} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
