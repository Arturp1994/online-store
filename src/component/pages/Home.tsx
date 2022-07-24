import {Card} from "../Card/Card";
import React, {ChangeEvent} from "react";
import {ArrType} from "../../App";
import {Route, Routes} from "react-router-dom";


type HomePropsType = {
    searchValue: string
    onChangeSearchInput: (event: ChangeEvent<HTMLInputElement>) => void
    items: ArrType
    onAddToFavorite: (name: string, price: number, imageURL: string, id: number) => void
    onAddToCard: (name: string, price: number, imageURL: string, id: number) => void
}
export const Home = (props: HomePropsType) => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={
                <div className='content'>
                    <div className='all'>
                        <h1>{props.searchValue ? `Поиск по запросу: '${props.searchValue}'` : 'Все товары'}</h1>
                        <div className='search-block'>
                            <div><img width={25} height={25}
                                      src={"img/1485477207-magnifier_78608.png"}
                                      alt={'Search'}/></div>
                            <div><input placeholder={'Поиск...'} onChange={props.onChangeSearchInput}/></div>
                        </div>
                    </div>
                    <div className='all-technic'>

                        {props.items
                            .filter((card) => card.name.toLowerCase().includes(props.searchValue))
                            .map((card, index) => (
                                <Card key={card.id}
                                      id={card.id}
                                      title={card.name}
                                      price={card.price}
                                      imageURL={card.imageURL}
                                      onClickPlus={(st, n, img, id) => props.onAddToCard(st, n, img, id)}
                                      onAddToFavorite={(st, n, img, id) => props.onAddToFavorite(st, n, img, id)}
                                />
                            ))}

                    </div>
                </div>
                }/>
            </Routes>
        </div>
    )
}