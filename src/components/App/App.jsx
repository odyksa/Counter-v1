import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.scss';
import ErrorBoundary from '../ErrorBoundary';
import ScrollToTop from '../../components/ScrollToTop';
import PageNotFound from '../../components/PageNotFound';

class App extends Component {
   render() {
      return (
         <ErrorBoundary>
            <Router basename="/">
               <ScrollToTop>
                  <div className="app">
                     <Switch>
                        <Route
                           path="/"
                           exact
                           component={() => <div>HomePage</div>}
                        />
                        <Route
                           path="/about"
                           exact
                           component={() => <div>About</div>}
                        />
                        <Route
                           component={PageNotFound}
                        />
                     </Switch>
                  </div>
               </ScrollToTop>
            </Router>
         </ErrorBoundary>
      );
   }
}

export default App;