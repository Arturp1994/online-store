import React from "react";

type CarsPropsType = {
    title: string,
    price: number
    imageURL: string
    onClick: ()=>void
}

export const Card = (props: CarsPropsType) => {


    return (
        <div className={'card'}>
            <div className={'favorite'}>
                <img width={18} height={15} src={'/img/Iconnotlike.png'} alt={'notLike'}/>
            </div>

            <img width={133} height={112}
                 src={props.imageURL} alt={'photo'}/>
            <h5>{props.title}</h5>
            <div className={'cardButton'}>
                <div>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <div>
                    <button className={'button'} onClick={props.onClick}>
                        <img width={11} height={11} src='/img/Icon.svg'/>
                    </button>
                </div>
            </div>
        </div>
    )
}