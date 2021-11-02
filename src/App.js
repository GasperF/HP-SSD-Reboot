import React from 'react';
import './App.css';
import NavBar from './components/Nav/NavBar';
import Hero from './components/Hero/Hero';
import SecOne from './components/SecOne/SecOne';
import FaqSec from './components/FaqSec/FaqSec';
import Form from './components/FormVal/Form';
import { FooterContainer } from './containers/footer'
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <SecOne />
      <Cards />
      <FaqSec />
      <Form />
      <FooterContainer />
    </div>
  );
}

export default App;
