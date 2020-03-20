import React from 'react';
import Global from './styles/global';
import Header from './modules/Header/Header';
import Cards from './modules/Cards/Cards';
import Partner from './modules/Partner/Partner';
import SearchPartners from './modules/SearchPartners/SearchPartners';
import Footer from './modules/Footer/Footer';

function App() {
  return (
    <>      
        <Global />
        <Header />
        <Cards />    
        <Partner />
        <SearchPartners />     
        <Footer />      
    </>
  );
}

export default App;

