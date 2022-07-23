import React from "react";
import {ArrType} from "../../App";
import {Route, Routes} from "react-router-dom";
import {Card} from "../Card/Card";

type OrdersPropsType = {
    order: ArrType

}

export const Orders = (props: OrdersPropsType) => {


    return (
        <div>
            <Routes>
                <Route path={'/orders'} element={
                    <div className='content'>
                        <div className='all'>
                            <h1>Мои заказы</h1>
                        </div>
                        <div className='all-technic'>
                            {props.order.map((card, index) => (
                                <Card key={card.id}
                                      id={card.id}
                                      title={card.name}
                                      price={card.price}
                                      imageURL={card.imageURL}
                                />
                            ))}

                        </div>
                    </div>
                }/>
            </Routes>
        </div>
    )
}