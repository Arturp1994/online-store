import React from "react";

export const Card = () => {

    return (
        <div className='card'>
            <img width={133} height={112}
                 src='//avatars.mds.yandex.net/get-mpic/5221929/img_id7837338156112880567.jpeg/orig' alt={'photo'}/>
            <h5>ASUS E410MA-EK1281T</h5>
            <div className='cardButton'>
                <div>
                    <span>Цена:</span>
                    <b>28 690 руб.</b>
                </div>
                <div>
                    <button className="button">
                        <img width={11} height={11} src='/img/Icon.svg'/>
                    </button>
                </div>
            </div>
        </div>
    )
}