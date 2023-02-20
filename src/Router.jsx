import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/web_pages/MainPage/MainPage';
import PortfolioPage from './pages/web_pages/PortfolioPage/PortfolioPage';
import ContactPage from './pages/web_pages/ContactsPage/ContactsPage';
import BrendPrice from './pages/web_pages/prices_pages/BrendPrice/BrendPrice';
import EventsPrice from './pages/web_pages/prices_pages/EventsPrice/EventPrice';
import IndividualPrice from './pages/web_pages/prices_pages/IndividualPrice/IndividualPrice';
import RegistrationPage from './pages/web_pages/prices_pages/RegistrationPage/RegistrationPage';
import ErrorPage from './pages/web_pages/ErrorPage/ErrorPage';

const AppRouter = () => (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/brend" element={<BrendPrice />} />
          <Route path="/events" element={<EventsPrice />} />
          <Route path="/individual" element={<IndividualPrice />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
);

export default AppRouter;