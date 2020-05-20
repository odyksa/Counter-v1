import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import styles from './Counter.scss';

import { store } from '../../store';
import { increaseByOne, decreaseByOne, increaseByRnd, decreaseByRnd } from '../../actions/counterActions';
import { addValToHistory } from '../../actions/historyActions';
import { fetchUsers } from '../../actions/randomUsersActions';
import History from '../History';
import RandomUsers from '../RandomUsers';

class Counter extends Component {

  componentDidMount = () => {
    store.dispatch(fetchUsers());
  }

  render() {
    const { value, increaseByOne, decreaseByOne, increaseByRnd, decreaseByRnd, addValToHistory } = this.props;

    return (
      <div className={styles.counter}>
        <div className={styles.value}>{value}</div>
        <div className="btns">
          <button onClick={() => { increaseByOne(), addValToHistory(value) }} title="Increase by 1">+ 1</button>
          <button onClick={decreaseByOne} title="Decrease by 1">- 1</button>
          <button onClick={increaseByRnd} title="Increase by Random value">+ Random Value</button>
          <button onClick={decreaseByRnd} title="Decrease by Random value">- Random Value</button>
        </div>
        <History />
        <RandomUsers />
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