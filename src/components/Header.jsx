import React from 'react';
import "../components/css/Header.css";

export default function Header() {
    
  return (
    
    <div className='header'>
        <div className="namePerson"><a href='../pages/MainPage/MainPage.jsx'>Ekaterina Plesser</a></div>
        <div className="headerMenu">
          <div className="navbar">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li>
                <a href="">Prices</a>
                <ul>
                  <li><a href="/brend">Brends</a></li>
                  <li><a href="/events">Events</a></li>
                  <li><a href="/individual">Individual</a></li>
                </ul>
              </li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
      </div>
    </div>
  )
}
