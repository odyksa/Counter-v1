import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import styles from './Counter.scss';

import { store } from '../../store';
import { init, increaseByOne, decreaseByOne, increaseByRnd, decreaseByRnd } from '../../actions/counterActions';
import { addValToHistory } from '../../actions/historyActions';
import { fetchUsers } from '../../actions/randomUsersActions';
import History from '../History';
import RandomUsers from '../RandomUsers';

class Counter extends Component {
  componentDidMount = () => {
    store.dispatch(init());
    store.dispatch(fetchUsers());
  }

  handleClick = (func) => {
    const { addValToHistory, value } = this.props;

    func();
    addValToHistory(value);
  }

  render() {
    const { value, increaseByOne, decreaseByOne, increaseByRnd, decreaseByRnd } = this.props;

    return (
      <div className={styles.counter}>
        <div className={styles.value}>{value}</div>
        <div className={styles.btns}>
          <button
            onClick={() => this.handleClick(increaseByOne)}
            title="Increase by 1"
          >
            + 1
          </button>
          <button
            onClick={() => this.handleClick(decreaseByOne)}
            title="Decrease by 1"
          >
            - 1
          </button>
          <button
            onClick={() => this.handleClick(increaseByRnd)}
            title="Increase by Random value"
          >
            + Random Value
          </button>
          <button
            onClick={() => this.handleClick(decreaseByRnd)}
            title="Decrease by Random value"
          >
            - Random Value
          </button>
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