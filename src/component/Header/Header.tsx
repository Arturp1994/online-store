import React from "react";
import style from './Header.module.scss'
import {NavLink} from "react-router-dom";

type  HeaderPropsType = {
    onClickCard: () => void
}


export const Header = (props: HeaderPropsType) => {

    return (
        <header>
            <NavLink to={'/'} className={style.headerInfo}>
                <div className={style.headerLeft}>
                    <img width={60} height={60}
                         src={'https://cdn0.iconfinder.com/data/icons/shopping-icons-rounded/110/Online-Shopping-1024.png'}
                         alt={'logo'}/>
                    <div>
                        <h3>React shop</h3>
                        <p>Магазин электроники</p>
                    </div>
                </div>
            </NavLink>
            <ul className={style.headerRight}>
                <li onClick={props.onClickCard}>
                    <img className={style.plus} width="28" height="27" src='/img/Icon.svg'/>
                    <span className={style.plus}>102 999 руб.</span>
                </li>
                <li>
                    <NavLink to={'/favorites'}>
                        <img width={32} height={31} src='/img/Iconlike.png'/>
                    </NavLink>
                </li>
                <li>
                    <img width={28} height={27} src='/img/Avatar 1.png'/>
                </li>
            </ul>
        </header>
    )
}