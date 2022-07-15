import React, {useState} from "react";
import style from './Card.module.scss'


type CarsPropsType = {
    title: string,
    price: number
    imageURL: string
    onClickPlus: (title:string, price: number, imageURL: string)=>void
    onClickFavorite: ()=>void
}

export const Card = (props: CarsPropsType) => {

    const [isAdded, setIsAdded]=useState(false)

    const onClickPlusHandler = ()=>{
        props.onClickPlus(props.title, props.price, props.imageURL)
        setIsAdded(!isAdded)
    }

    return (
        <div className={style.card}>
            <div className={style.favorite}>
                <img width={18} height={15} src={'/img/Iconnotlike.png'} alt={'notLike'} onClick={props.onClickFavorite}/>
            </div>

            <img width={133} height={112}
                 src={props.imageURL} alt={'photo'}/>
            <h5>{props.title}</h5>
            <div className={style.cardButton}>
                <div>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <div>
                    <button className={isAdded? style.greenButton:style.button} onClick={onClickPlusHandler}>
                        <img width={11} height={11} src='/img/Icon.svg' alt={'icon'}/>
                    </button>
                </div>
            </div>
        </div>
    )
}