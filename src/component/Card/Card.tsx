import React, {useState} from "react";
import style from './Card.module.scss'


type CarsPropsType = {
    title: string,
    price: number
    imageURL: string
    onClickPlus?: (title:string, price: number, imageURL: string, id:number)=>void
    id:number
    onAddToFavorite?:(title:string, price: number, imageURL: string, id:number)=>void
    favorite?: boolean
}

export const Card = (props: CarsPropsType) => {

    const [isAdded, setIsAdded]=useState(false)
    const [isFavorite, setIsFavorite]=useState(props.favorite)

    const onClickPlusHandler = ()=>{
        if (props.onClickPlus) {
            props.onClickPlus(props.title, props.price, props.imageURL, props.id)
        }
        setIsAdded(!isAdded)
    }
    const onClickFavorite = ()=>{
        setIsFavorite(!isFavorite)
        if (props.onAddToFavorite){
        props.onAddToFavorite(props.title, props.price, props.imageURL, props.id)}
    }

    return (
        <div className={style.card}>
            <div className={style.favorite}>
                <img width={20} height={16} src={isFavorite? '/img/ddd.png': '/img/Iconnotlike.png'} alt={'notLike'} onClick={onClickFavorite}/>
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