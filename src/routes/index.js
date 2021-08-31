import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/GlobalStyles.css';

// Routes
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import StoreLocator from '../pages/StoreLocator';
import Footer from '../components/Footer';

function Routes() {
    return (
    <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/store-locator' exact component={StoreLocator} />
        </Switch>
        <Footer />
    </BrowserRouter>
    )
}

export default Routes;
