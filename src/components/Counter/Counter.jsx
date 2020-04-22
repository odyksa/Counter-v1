import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import styles from './Counter.scss';

import { increment, decrement, random } from '../../actions/counterActions';

class Counter extends Component {
  render() {
    const { value, increase, decrease, random } = this.props;

    return (
      <div className={styles.counter}>
        <div className={styles.value}>{value}</div>
        <div className="btns">
          <button onClick={increase}>+1</button>
          <button onClick={decrease}>-1</button>
          <button onClick={random}>+ random</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ counter }) => {
  return {
    value: counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: bindActionCreators(increment, dispatch),
    decrease: bindActionCreators(decrement, dispatch),
    random: bindActionCreators(random, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);