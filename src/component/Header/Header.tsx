import React from "react";
import style from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {ArrType} from "../../App";

type  HeaderPropsType = {
    onClickCard: () => void
    cardItems:ArrType
}


export const Header = (props: HeaderPropsType) => {

    const totalPrice = props.cardItems.reduce((sum,obj)=> obj.price + sum, 0)

    return (
        <header>
            <NavLink to={'/'} className={style.headerInfo}>
                <div className={style.headerLeft}>
                    <img width={60} height={60}
                         src={'https://cdn0.iconfinder.com/data/icons/shopping-icons-rounded/110/Online-Shopping-1024.png'}
                         alt={'logo'}/>
                    <div>
                        <h3>REACT SHOP</h3>
                        <p>Магазин электроники</p>
                    </div>
                </div>
            </NavLink>
            <ul className={style.headerRight}>
                <li onClick={props.onClickCard}>
                    <img className={style.plus} width="28" height="27" src='/img/Icon.svg'/>
                    <span className={style.plus}>{totalPrice} руб.</span>
                </li>
                <li>
                    <NavLink to={'/favorites'}>
                        <img width={32} height={31} src='/img/Iconlike.png'/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/orders'}>
                    <img width={28} height={27} src='/img/Avatar 1.png'/>
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}