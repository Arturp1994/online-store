import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import {Card} from "./component/Card/Card";
import {Header} from "./component/Header/Header";
import {Drawer} from "./component/Drawer";

export type ArrType = {
    name: string
    price: number
    imageURL: string
}[]


function App() {

    const [items, setItems] = useState<ArrType>([])
    const [cardItems, setCardItems] = useState<ArrType>([])
    const [cardOpened, setCardOpened] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        axios.get('https://62d145addccad0cf176431e2.mockapi.io/Items').then((res)=>{setItems(res.data)})
    }, [])

    const onAddToCard = (name: string, price: number, imageURL: string) => {
        setCardItems([...cardItems, {name, price, imageURL}])
    }

    const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value)
    }

    return (
        <div className="Wrapper">

            {cardOpened && <Drawer items={cardItems} onClose={() => {
                setCardOpened(false)
            }}/>}

            <Header onClickCard={() => {
                setCardOpened(true)
            }}/>
            <div className='content'>
                <div className='all'>
                    <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все товары'}</h1>
                    <div className='search-block'>
                        <div><img width={25} height={25}
                                  src={"/img/search.png"}
                                  alt={'Search'}/></div>
                        <div><input placeholder={'Поиск...'} onChange={onChangeSearchInput}/></div>
                    </div>
                </div>
                <div className='all-technic'>

                    {items
                        .filter((card) => card.name.toLowerCase().includes(searchValue))
                        .map((card, index) => (
                            <Card key={card.name}
                                  title={card.name}
                                  price={card.price}
                                  imageURL={card.imageURL}
                                  onClickPlus={(st, n, img) => onAddToCard(st, n, img)}
                                  onClickFavorite={() => {
                                      alert('Добавили в избранное')
                                  }}/>
                        ))}

                </div>
            </div>
        </div>
    );
}

export default App;
