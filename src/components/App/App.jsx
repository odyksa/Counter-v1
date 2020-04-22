import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import styles from './App.scss';

import { increment, decrement, random } from '../../actions/appActions';

class App extends Component {
  render() {
    const { value, increase, decrease, random } = this.props;

    return (
      <div className="app">
        <div className="counter">
          <div>Counter: {value}</div>
          <div className="btns">
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={random}>+ random</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: bindActionCreators(increment, dispatch),
    decrease: bindActionCreators(decrement, dispatch),
    random: bindActionCreators(random, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);