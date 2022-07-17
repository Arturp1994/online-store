import React, {ChangeEvent} from "react";
import {ArrType} from "../../App";
import {Route, Routes} from "react-router-dom";
import {Card} from "../Card/Card";


type FavoritesPropsType = {
    favorites: ArrType
    onAddToFavorite:(name: string, price: number, imageURL: string, id: number)=>void
}

export const Favorites = (props: FavoritesPropsType) => {
    return (
        <div>
            <Routes>
                <Route path={'/favorites'} element={
                <div className='content'>
                    <div className='all'>
                        <h1>Мои закладки</h1>

                    </div>
                    <div className='all-technic'>
                        {props.favorites.map((card, index) => (
                                <Card key={card.id}
                                      id={card.id}
                                      title={card.name}
                                      price={card.price}
                                      imageURL={card.imageURL}
                                      favorite={true}
                                      onAddToFavorite={props.onAddToFavorite}
                                />
                            ))}

                    </div>
                </div>
                }/>
            </Routes>
        </div>
    )
}