import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// Routes
import Header from '../components/Header';
import Home from '../pages/Home/';
import Menu from '../pages/Menu/';
import About from '../pages/About/';
import Contact from '../pages/Contact/';
import Impact from '../pages/Impact/';
import StoreLocator from '../pages/StoreLocator/';
import Footer from '../components/Footer/';

function Routes() {
    return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/impact' exact component={Impact} />
          <Route path='/store-locator' exact component={StoreLocator} />
        </Switch>
        <Footer />
    </BrowserRouter>
    )
}

export default Routes;
