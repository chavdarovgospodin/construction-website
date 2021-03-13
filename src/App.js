import React, { Fragment, useEffect, useRef, useState, Component } from 'react';
import { About, Services, Contact, Kitchens, Gardens } from './pages';
import { Navigation, Header, Thumbnails, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WOW from 'wowjs';

import './App.scss';

function App() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    new WOW.WOW().init();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className={`navigation-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
          <Navigation />
        </div>
        <Switch>
          <Route path="/" exact component={Thumbnails} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/kitchens" exact component={Kitchens} />
          <Route path="/gardens" exact component={Gardens} />
          <Route path="/gallery" exact component={Thumbnails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
