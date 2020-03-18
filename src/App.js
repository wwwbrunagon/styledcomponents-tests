import React from 'react';
import Global from './styles/global';
import Partner from './modules/Partener/Partner'
import SearchPartners from './modules/SearchPartners/SearchPartners';
import Footer from './modules/Footer/Footer';

function App() {
  return (
    <>
      <Global />
      <Partner />
      <SearchPartners />     
      <Footer />
    </>
  );
}

export default App;

