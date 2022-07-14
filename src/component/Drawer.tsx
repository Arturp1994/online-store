import React from "react";


export const Drawer = () => {

    return (
        <div className='drawer'>
            <h2>Корзина</h2>

            <div className="items">
                <div className='cartItem'>
                    <img width={70} height={70}
                         src={'https://store77.net/upload/w247/imageCache/b7b/960/3bfd1de5c256970be410d5998207b6e1.png'}/>
                    <div>
                        <p>ASUS E410MA-EK1281T</p>
                        <b>28 690 руб.</b>
                    </div>
                    <img className={'removeBtn'} width={15} height={15} src={"/img/close-button_icon-icons.com_72803.png"}  alt={'remove'}/>
                </div>

                <div className='cartItem'>
                    <img width={70} height={70}
                         src={'https://store77.net/upload/w247/imageCache/b7b/960/3bfd1de5c256970be410d5998207b6e1.png'}/>
                    <div>
                        <p>ASUS E410MA-EK1281T</p>
                        <b>28 690 руб.</b>
                    </div>
                    <img className={'removeBtn'} width={15} height={15} src={"/img/close-button_icon-icons.com_72803.png"}  alt={'remove'}/>
                </div>
            </div>
            <ul className='cardTotalBlock'>
                <li className='allPrice'>
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб.</b>
                </li>
                <li className='sale'>
                    <span>Скидка 5%</span>
                    <div></div>
                    <b>1074 руб.</b>
                </li>
            </ul>
            <button className='button-new'>Оформить заказ</button>
        </div>
)
}