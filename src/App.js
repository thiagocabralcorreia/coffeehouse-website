import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Shop from './pages/Shop';
import StoreLocator from './pages/StoreLocator';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/store-locator' exact component={StoreLocator} />
        </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
