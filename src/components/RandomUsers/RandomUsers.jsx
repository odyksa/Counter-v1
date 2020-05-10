import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './RandomUsers.scss';

import spinnerIcon from '../../assets/images/spinner.svg';
import errorIcon from '../../assets/images/error.svg';

class RandomUsers extends Component {

  render() {
    const { users, loading, error } = this.props.randomUsers;

    return (
      <div className={styles.randomUsers}>
        <p className={styles.title}>Random Users which used Counter</p>
        {
          loading && <img src={spinnerIcon} alt="loading" />
        }
        {
          error && (
            <div className="errorBlock">
              <p className={styles.error}>{error}</p>
              <img src={errorIcon} alt={error} />
            </div>
          )
        }
        {
          users && (
            <ul className="usersList">
              {
                users.map((user) => <li className={styles.user} key={user}>{user}</li>)
              }
            </ul>
          )
        }
        <p className={styles.copyright}>Used <a href="http://randomuser.me/">Random User Api</a></p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    randomUsers: state.randomUsers
  }
}

export default connect(mapStateToProps)(RandomUsers);