import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route name='/' exact component={Home} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
