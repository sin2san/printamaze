
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Services from './components/pages/Services/Services';
import Form from './components/Form/Form';
import Formin from './components/Form/Formin';
import FormSigin  from './components/Form/FormSigin';
import  Searchbar  from './components/Searchbar/SearchBar';
import AddToCart  from './components/AddToCart/AddToCart';
import { CartProvider } from 'react-use-cart';
import Cart from './components/AddToCart/Cart';
import './App.css';



class App extends Component {
  render() {
  return (
    <>
     <Router>
       <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/services' exact component={Services} />
        <Route path='/Form' exact component={Form} />
        <Route path='/Searchbar' exact component={Searchbar} />
        <Route path='/Formin' exact component={Formin} />
        <Route path='/FormSignin' exact component={FormSigin} />
        <CartProvider>
           <Route path='/AddToCart' exact component={AddToCart} />
           <Cart  component={Cart}/>
        </CartProvider>
      </Switch>
     </Router>
    </>
  );
}
}

export default App;