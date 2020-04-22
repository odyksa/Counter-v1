import React from 'react';

import icon from '../../assets/images/errorIndicator/errorIndicator.svg';

import styles from './ErrorIndicator.scss';

function ErrorIndicator() {
   return (
      <div className={styles.errorIndicator}>
         <img src={icon} alt="error" className={styles.img} />
         <p className={styles.title}>Ooops!</p>
         <p className={styles.text}>We're sorry, but something went wrong...</p>
         <p className={styles.text}>Please try again later.</p>
      </div>
   );
}

export default ErrorIndicator;