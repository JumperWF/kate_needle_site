import React, { Component }  from 'react';
import './App.css';
import Header from './components/Header';
// import ContactsPage from './pages/web_pages/ContactsPage/ContactsPage' //заменить на роутинг
import Footer from './components/Footer';
// попытка роутинга----------------------------------------------
import Router from './Router';



function App() {

  return (
    <div className="App">
        <Header />
        <Router />
        {/* <ContactsPage /> заменить на роутинг */}
        <Footer/>
    </div>
  );
}

export default App;