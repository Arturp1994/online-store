import React from "react";
import {ArrType} from "../App";

type DraverPropsType={
    onClose: ()=>void
    items: ArrType
    onRemove:(id:number)=>void
}

export const Drawer = (props: DraverPropsType) => {


    return (
        <div className='overlay'>
        <div className='drawer'>
            <div className='basket'>
            <h2>Корзина</h2>
            <img onClick={props.onClose} className={'removeBtn'} width={15} height={15} src={"/img/close-button_icon-icons.com_72803.png"}  alt={'remove'}/>
            </div>
            <div className="items">
                {props.items.map((m, index)=>(
                    <div className='cartItem'>
                        <img width={70} height={70}
                             src={m.imageURL}/>
                        <div>
                            <p>{m.name}</p>
                            <b>{m.price} руб.</b>
                        </div>
                        <img onClick={()=>props.onRemove(m.id)} className={'removeBtn'} width={15} height={15} src={"/img/close-button_icon-icons.com_72803.png"}  alt={'remove'}/>
                    </div>
                ))}
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
        </div>
)
}