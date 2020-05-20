import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './RandomUsers.scss';

import userIcon from '../../assets/images/user.svg';
import spinnerIcon from '../../assets/images/spinner.svg';
import errorIcon from '../../assets/images/error.svg';

class RandomUsers extends Component {
  renderError = () => {
    const { error } = this.props.randomUsers;

    if (error) {
      return (
        <div className="errorBlock">
          <p className={styles.error}>{error}</p>
          <img src={errorIcon} alt={error} />
        </div>
      );
    }
  }

  renderLoading = () => {
    const { loading } = this.props.randomUsers;

    if (loading) {
      return (
        <img src={spinnerIcon} alt="loading" />
      );
    }
  }

  renderUsersList = () => {
    const { users } = this.props.randomUsers;

    if (users.length) {
      const usersItems = users.map((user) => {
        return (
          <li className={styles.user} key={user}>
            <img src={userIcon} alt={user} className={styles.userIcon} />
            <span>{user}</span>
          </li>
        );
      });

      return (
        <ul className="usersList">
          {usersItems}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className={styles.randomUsers}>
        <p className={styles.title}>Latest Users which used Counter</p>
        {this.renderLoading()}
        {this.renderError()}
        {this.renderUsersList()}

        <div className={styles.copyright}>
          <span>Used</span>
          <a href="http://randomuser.me/">Random User Api</a>
        </div>
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