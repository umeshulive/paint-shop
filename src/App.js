import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Use
} from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';

import Home from './components/Home';
import Products from './components/Products';
import Checkout from './components/Checkout';
import Cart from './components/Cart';

import  AddProduct from './components/admin/AddProduct';

import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/addproduct">Add Product</Link>
              </li>              
            </ul>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>          
          <hr />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/addproduct">
              <AddProduct />
            </Route>            
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
