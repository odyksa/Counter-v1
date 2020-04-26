import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './RandomUsers.scss';

import spinnerIcon from '../../assets/images/spinner.svg'

class RandomUsers extends Component {

  render() {
    const { users, loading, error } = this.props.state;

    return (
      <div className={styles.randomUsers}>
        <p className={styles.title}>Random Users which used Counter</p>
        {
          loading && <img src={spinnerIcon} alt="loading" />
        }
        {
          error && <p className={styles.error}>{error}</p>
        }
        {
          users && (
            <ul className="users">
              {
                users.map((user) => <li className={styles.user} key={user}>{user}</li>)
              }
            </ul>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.randomUsers
  }
}

export default connect(mapStateToProps)(RandomUsers);