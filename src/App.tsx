import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import {Header} from "./component/Header/Header";
import {Drawer} from "./component/Drawer";
import {Home} from "./component/pages/Home";
import {HashRouter} from "react-router-dom";
import {Favorites} from "./component/pages/Favorites";

export type ArrType = {
    name: string
    price: number
    imageURL: string
    id: number
}[]


function App() {

    const [items, setItems] = useState<ArrType>([])
    const [cardItems, setCardItems] = useState<ArrType>([])
    const [cardOpened, setCardOpened] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [favorites, setFavorites] = useState<ArrType>([])

    useEffect(() => {
        axios.get('https://62d145addccad0cf176431e2.mockapi.io/Items').then((res) => {
            setItems(res.data)
        })
        axios.get('https://62d145addccad0cf176431e2.mockapi.io/card').then((res) => {
            setCardItems(res.data)
        })
        axios.get('https://62d145addccad0cf176431e2.mockapi.io/favorites').then((res) => {
            setFavorites(res.data)
        })
    }, []);

    const onAddToCard = (name: string, price: number, imageURL: string, id: number) => {
        axios.post('https://62d145addccad0cf176431e2.mockapi.io/card', {name, price, imageURL, id})
        setCardItems([...cardItems, {name, price, imageURL, id}])
    }

    const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value)
    }

    const onRemoveItem = (id: number) => {
        axios.delete(`https://62d145addccad0cf176431e2.mockapi.io/card/${id}`)
        setCardItems((prev) => prev.filter(item => item.id !== id))
    }

    const onAddToFavorite = async (name: string, price: number, imageURL: string, id: number) => {
        if (favorites.find(o=>o.id===id)){
            axios.delete(`https://62d145addccad0cf176431e2.mockapi.io/favorites/${id}`)
        } else {
        const{data} = await axios.post('https://62d145addccad0cf176431e2.mockapi.io/favorites', {name, price, imageURL, id})
        setFavorites((prev)=>[...prev, data])
    }}

    return (
        <div>
            <HashRouter>

                <div className="Wrapper">

                    {cardOpened && <Drawer onRemove={onRemoveItem} items={cardItems} onClose={() => {
                        setCardOpened(false)
                    }}/>}

                    <Header onClickCard={() => {
                        setCardOpened(true)
                    }}/>
                    <Favorites favorites={favorites} onAddToFavorite={onAddToFavorite}/>
                    <Home
                        searchValue={searchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        items={items}
                        onAddToFavorite={onAddToFavorite}
                        onAddToCard={onAddToCard}


                    />
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
