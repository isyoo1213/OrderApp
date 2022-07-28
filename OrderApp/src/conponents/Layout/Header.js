import React, { Fragment } from "react";

import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>KoalaMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        {/* 대쉬가 있을 경우 점표기법이 불가능하므로 특성선택자 */}
        <img src={mealsImage} alt='A table full of delicious food'></img>
      </div>
    </Fragment>
  );
};

export default Header;
