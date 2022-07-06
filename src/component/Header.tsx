import React from "react";

export const Header = () => {

    return (
        <header>
            <div className="headerLeft">
                <img width={60} height={60}
                     src={'https://cdn0.iconfinder.com/data/icons/shopping-icons-rounded/110/Online-Shopping-1024.png'}
                     alt={'logo'}/>
                <div className="headerInfo">
                    <h3>React shop</h3>
                    <p>Магазин электроники</p>
                </div>
            </div>
            <ul className="headerRight">
                <li>
                    <img width="28" height="27" src='/img/Icon.svg'/>
                    <span>102 999 руб.</span>
                </li>
                <li>
                    <img width={28} height={27} src='/img/Avatar 1.png'/>
                </li>
            </ul>
        </header>
    )
}