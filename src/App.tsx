import React, {useEffect, useState} from 'react';
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

    useEffect(()=>{
        fetch('https://62d145addccad0cf176431e2.mockapi.io/Items').then(res =>{
            return res.json()
        }).then((json)=>{setItems(json)})
    }, [])

    const onAddToCard= (name: string,price: number,imageURL: string) => {
        setCardItems([...cardItems, {name,price,imageURL}])
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
                    <h1>Все товары</h1>
                    <div className='search-block'>
                        <div><img width={25} height={25}
                                  src={"/img/search.png"}
                                  alt={'Search'}/></div>
                        <div><input placeholder={'Поиск...'}/></div>
                    </div>
                </div>
                <div className='all-technic'>

                    {items.map(card => (
                        <Card title={card.name}
                              price={card.price}
                              imageURL={card.imageURL}
                              onClickPlus={(st, n, img)=>onAddToCard(st,n,img)}
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
