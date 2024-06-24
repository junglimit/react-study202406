import React, {useContext, useEffect, useState} from 'react';
import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.scss';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {



    // bump 애니메이션을 제어하는 상태변수
    const [isBumped, setIsBumped] = useState(false);

    // 장바구니 배열
    const { cartItems } = useContext(CartContext);

    const numberOfCart = cartItems.reduce((accum, current) => accum + current.amount, 0);

    const {button, icon, badge , bump} = styles;

    useEffect(() => {
        // console.log('useEffect 실행')

        if(cartItems.length === 0) return;

        setIsBumped(true);

        // 애니메이션 실행 후 클래스 제거
        const timer = setTimeout(() => {
        setIsBumped(false);
        }, 300);
        // 광클방지 디바운싱
        return () => {
            clearTimeout(timer);
        }
    }, [cartItems]);

    return (
        <button className={`${button} ${isBumped ? bump : undefined}`} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
            <span>My Cart</span>
            <span className={badge}>{numberOfCart}</span>
        </button>
    );
};

export default HeaderCartButton;
