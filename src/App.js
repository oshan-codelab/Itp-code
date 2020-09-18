import React from 'react';
import logo from './logo.svg';
import OrderDelivery from './components/Delivery/OrderDelivery';
import Dtable from './components/Delivery/Dtable';
import Headerbar from  './components/Headerbar';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App-logo"  className="App-logo-spin" >
     
     
        <Headerbar />
       
       <Dtable />
        <Footer />
      
     
    </div>
  );
}

export default App;
