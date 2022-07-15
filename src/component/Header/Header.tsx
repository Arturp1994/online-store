import React from "react";
import style from './Header.module.scss'

type  HeaderPropsType = {
    onClickCard: ()=>void
}


export const Header = (props:HeaderPropsType) => {

    return (
        <header>
            <div className={style.headerLeft}>
                <img width={60} height={60}
                     src={'https://cdn0.iconfinder.com/data/icons/shopping-icons-rounded/110/Online-Shopping-1024.png'}
                     alt={'logo'}/>
                <div className={style.headerInfo}>
                    <h3>React shop</h3>
                    <p>Магазин электроники</p>
                </div>
            </div>
            <ul className={style.headerRight} onClick={props.onClickCard}>
                <li>
                    <img className={style.plus} width="28" height="27" src='/img/Icon.svg'/>
                    <span className={style.plus}>102 999 руб.</span>
                </li>
                <li>
                    <img width={28} height={27} src='/img/Avatar 1.png'/>
                </li>
            </ul>
        </header>
    )
}