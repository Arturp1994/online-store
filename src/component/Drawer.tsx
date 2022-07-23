import React, {useContext, useEffect, useState} from "react";
import {ArrType} from "../App";
import axios from "axios";

type DraverPropsType = {
    onClose: () => void
    items: ArrType
    onRemove: (id: number) => void
    setCardItems: (a: ArrType)=> void
    cardItems:ArrType
    sendOrder:(a: ArrType)=>void
}

export const Drawer = (props: DraverPropsType) => {


    const [isOrderComplete, setIsOrderComplete] = useState(false)

    const onClickOrder = () => {
        props.sendOrder(props.items)
        axios.put('https://62d145addccad0cf176431e2.mockapi.io/card', [])
        setIsOrderComplete(true)
        props.setCardItems([])
    }



    const totalPrice = props.cardItems.reduce((sum,obj)=> obj.price + sum, 0)

    return (
        <>
            {isOrderComplete ? (<div className='overlay'>
                        <div className='drawer'>
                            <div className='basket'>
                                <h2>Корзина</h2>
                                <img onClick={props.onClose} className={'removeBtn'} width={25} height={25}
                                     src={"/img/1491313931-cross_82985.png"} alt={'remove'}/>
                            </div>
                            <div className={'success'}>
                                <h3>Спасибо! Ваш заказ принят.</h3>
                                <span>В ближайшее время мы свяжемся с вами.</span>
                                <img width={80} height={80} src={'https://www.kritika24.ru/img/yes.png'}/>
                            </div>
                            <button className='button-new' onClick={props.onClose}>Заказ оформлен</button>
                        </div>
                    </div>
                )
                :
                <div className='overlay'>
                    <div className='drawer'>
                        <div className='basket'>
                            <h2>Корзина</h2>
                            <img onClick={props.onClose} className={'removeBtn'} width={25} height={25}
                                 src={"/img/1491313931-cross_82985.png"} alt={'remove'}/>
                        </div>
                        <div className="items">
                            {props.items.map((m, index) => (
                                <div key={m.id} className='cartItem'>
                                    <img width={70} height={70}
                                         src={m.imageURL}/>
                                    <div>
                                        <p>{m.name}</p>
                                        <b>{m.price} руб.</b>
                                    </div>
                                    <img onClick={() => props.onRemove(m.id)} className={'removeBtn'} width={15}
                                         height={15}
                                         src={"/img/close-button_icon-icons.com_72803.png"} alt={'remove'}/>
                                </div>
                            ))}
                        </div>
                        <ul className='cardTotalBlock'>
                            <li className='allPrice'>
                                <span>Итого</span>
                                <div></div>
                                <b>{totalPrice} руб.</b>
                            </li>
                            <li className='sale'>
                                <span>Скидка 5%</span>
                                <div></div>
                                <b>{Math.floor(totalPrice * 0.05)} руб.</b>
                            </li>
                            <li className='sale'>
                                <span>Всего со скидкой</span>
                                <div></div>
                                <b>{Math.floor(totalPrice-(totalPrice * 0.05))} руб.</b>
                            </li>
                        </ul>
                        <button className='button-new' onClick={onClickOrder} disabled={false}>Оформить заказ</button>
                    </div>
                </div>
            }
        </>)
}