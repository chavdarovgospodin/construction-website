import React, { Fragment, useEffect, useRef, useState, Component } from 'react';
import { 
  About, 
  Services, 
  Contact, 
  Kitchens, 
  Gardens, 
  CommingSoon,
  Bathrooms,
  Painting,
  } from './pages';
import { Navigation, Header, Thumbnails, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getWindowDimensions } from './utils/utils';
import WOW from 'wowjs';

import './App.scss';

function App() {
  const [isSticky, setSticky] = useState(false);
  const [breakPoint, setBreakPoint] = useState(null)
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    const getBreakPoint = () => {
      setBreakPoint(getWindowDimensions())
    }
    if(breakPoint === null) getBreakPoint();
    new WOW.WOW().init();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', getBreakPoint);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
      window.removeEventListener('resize', getBreakPoint);
    };
  }, []);

  return (
    <Router>
      <div className={`App ${breakPoint}`}>
        <Header breakPoint = {breakPoint}/>
        <div className={`navigation-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
          <Navigation breakPoint={breakPoint}/>
        </div>
        <Switch>
          <Route path="/" exact component={Thumbnails} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
          {/* <Route path="/kitchens" exact component={Kitchens} /> */}
          <Route path="/gardens" exact component={Gardens} />
          <Route path="/bathrooms" exact component={Bathrooms} />
          <Route path="/gallery" exact component={Thumbnails} />
          <Route path="/painting" exact component={Painting} />
          <Route component={CommingSoon}/>
          {/* to do */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
