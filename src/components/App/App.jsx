import React, { Component } from 'react';

import styles from './App.scss';

import Counter from '../Counter';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Counter />
      </div>
    );
  }
}

export default App;