import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './History.scss';

class History extends Component {
  render() {
    const { value } = this.props;

    return (
      <div className={styles.history}>Last 3 results: {value}</div>
    );
  }
}

const mapStateToProps = ({ history }) => {
  return {
    value: history
  }
}

export default connect(mapStateToProps)(History);