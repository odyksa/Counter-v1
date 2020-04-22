import React from 'react';
import { Link } from 'react-router-dom'
import styles from './PageNotFound.scss';
import icon from '../../assets/images/pageNotFound/error-404.svg';

function PageNotFound() {
   const text = "Извините, но запрашиваемая Вами страница не найдена!";
   const homeLink = "Главная";

   return (
      <div className={styles.pageNotFound}>
         <img src={icon} alt="page not found" className={styles.icon} />
         <p className={styles.text}>{text}</p>
         <Link to="/" className={styles.link}>{homeLink}</Link>
      </div>
   );
}

export default PageNotFound;