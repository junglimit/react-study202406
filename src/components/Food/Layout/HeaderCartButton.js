import React from 'react';
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";

const { button, icon, badge  } = styles;

const HeaderCartButton = ({onShow}) => {
    return (
        <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon/>
      </span>
            <span>My Cart</span>
            <span className={badge}>3</span>
        </button>
    );
};

export default HeaderCartButton;