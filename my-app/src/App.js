import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Main from './components/main/main'
import Header from './components/header/header'

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
