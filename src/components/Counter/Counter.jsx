import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import styles from './Counter.scss';

import { increaseByOne, decreaseByOne, increaseByRnd, decreaseByRnd } from '../../actions/counterActions';
import { addValToHistory } from '../../actions/historyActions';

import History from '../History';

class Counter extends Component {
  render() {
    const { value, increaseByOne, decreaseByOne, increaseByRnd, decreaseByRnd, addValToHistory } = this.props;

    return (
      <div className={styles.counter}>
        <div className={styles.value}>{value}</div>
        <div className="btns">
          <button onClick={() => { increaseByOne(), addValToHistory(value) }} title="Increase by 1">+ 1</button>
          <button onClick={decreaseByOne} title="Decrease by 1">- 1</button>
          <button onClick={increaseByRnd} title="Increase by Random value">+ RND</button>
          <button onClick={decreaseByRnd} title="Decrease by Random value">- RND</button>
        </div>
        <History />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.counter.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseByOne: bindActionCreators(increaseByOne, dispatch),
    decreaseByOne: bindActionCreators(decreaseByOne, dispatch),
    increaseByRnd: bindActionCreators(increaseByRnd, dispatch),
    decreaseByRnd: bindActionCreators(decreaseByRnd, dispatch),
    addValToHistory: bindActionCreators(addValToHistory, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);