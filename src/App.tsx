import React from 'react';
import './App.css';

function App() {
    return (
        <div className="Wrapper">
            <div className='overlay'>
                <div className='drawer'>
                    <h2>Корзина</h2>

                    <div className="items">
                        <div className='cartItem'>
                            <img width={70} height={70}
                                 src={'https://store77.net/upload/w247/imageCache/b7b/960/3bfd1de5c256970be410d5998207b6e1.png'}/>
                            <div>
                                <p>ASUS E410MA-EK1281T</p>
                                <b>28 690 руб.</b>
                            </div>
                            <img className={'removeBtn'} width={15} height={15} src={"/img/close-button_icon-icons.com_72803.png"}  alt={'remove'}/>
                        </div>

                        <div className='cartItem'>
                            <img width={70} height={70}
                                 src={'https://store77.net/upload/w247/imageCache/b7b/960/3bfd1de5c256970be410d5998207b6e1.png'}/>
                            <div>
                                <p>ASUS E410MA-EK1281T</p>
                                <b>28 690 руб.</b>
                            </div>
                            <img className={'removeBtn'} width={15} height={15} src={"/img/close-button_icon-icons.com_72803.png"}  alt={'remove'}/>
                        </div>
                    </div>
                <ul className='cardTotalBlock'>
                    <li className='allPrice'>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб.</b>
                    </li>
                    <li className='sale'>
                        <span>Скидка 5%</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                </ul>
                    <button className='button-new'>Оформить заказ</button>
                </div>
            </div>

            <header>
                <div className="headerLeft">
                    <img width={60} height={60}
                         src={'https://cdn0.iconfinder.com/data/icons/shopping-icons-rounded/110/Online-Shopping-1024.png'}
                         alt={'logo'}/>
                    <div className="headerInfo">
                        <h3>React shop</h3>
                        <p>Магазин электроники</p>
                    </div>
                </div>
                <ul className="headerRight">
                    <li>
                        <img width="28" height="27" src='/img/Icon.svg'/>
                        <span>102 999 руб.</span>
                    </li>
                    <li>
                        <img width={28} height={27} src='/img/Avatar 1.png'/>
                    </li>
                </ul>
            </header>
            <div className='content'>
                <div className='all'>
                    <h1>Все товары</h1>
                    <div className='search-block'>
                        <div><img width={20} height={20}
                                  src={"https://cdn.pixabay.com/photo/2017/06/21/07/51/icon-2426369_1280.png"}
                                  alt={'Search'}/></div>
                        <div><input placeholder={'Поиск...'}/></div>
                    </div>
                </div>
                <div className='all-technic'>
                    <div className='card'>
                        <div className='favorite'>
                            <img width={18} height={15} src={'/img/Iconnotlike.png'} alt={'notLike'}/>
                        </div>

                        <img width={133} height={112}
                             src='https://store77.net/upload/w247/imageCache/b7b/960/3bfd1de5c256970be410d5998207b6e1.png'/>
                        <h5>Apple Macbook Air</h5>
                        <div className='cardButton'>
                            <div>
                                <span>Цена:</span>
                                <b>78 999 руб.</b>
                            </div>
                            <div>
                                <button className="button">
                                    <img width={11} height={11} src='/img/Icon.svg'/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <img width={133} height={112}
                             src='//avatars.mds.yandex.net/get-mpic/5221929/img_id7837338156112880567.jpeg/orig'/>
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

                    <div className='card'>
                        <img width={133} height={112}
                             src='//avatars.mds.yandex.net/get-mpic/5272711/img_id1354471594542199534.jpeg/orig'/>
                        <h5>Apple Watch Series 7</h5>
                        <div className='cardButton'>
                            <div>
                                <span>Цена:</span>
                                <b>32 999 руб.</b>
                            </div>
                            <div>
                                <button className="button">
                                    <img width={11} height={11} src='/img/Icon.svg'/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <img width={133} height={112}
                             src='https://yandex-images.clstorage.net/5BuH0r185/3492b4CuQ/DY1E4fbBIVhFz_bHrYdrFPFfyoNagdEXuAmFrg6JAZSK5e8--Ez07KlvAQKCGZAZgzZqwroCBvtRbdvlZnFOmRCcXMGeoHw4ad_mktyDFyCgm1ID5hk5ykiVDVuK8RH9rsXOIr0lXVjokgTvg4Wcff8CkvtLs8O2MKAC0BP8A2x59RXM57WdyOkXlkMoax8wtFeyb_Y1GbqM4bVnkomJHTb99wapIYn1NC5op5fpIAXDKgpzN39TggSMjnCfIKfUTZ0ByNthiTTh0zpLZIsDLJz_5k_auQ1aTFWZz3rB1QW6nWvOFa0ZlXDyqFPjjRA5t2Juf4f7l76UvNIA77C7gP2VVZiHOfUcjQPKz2iHO7AgU8bLIq3JaqTxwbvutVmFao0PtkHdBU2g-nzz4w0omasiZnfj6_N6uATaiPfYF5j95VWgf0UV5IkvKjP0H5_E7He6m7LdcRZoobFLglWlcfblz5bFuUGVzNoAa5s1nGFTIm73299_ypRUYiQL2D_YvV09rBOpNbzp027PcDOb5Pzb7m9Goc2iODUxSyrBTcGeXZ-64c3xsfA-fFP_uYQV_6Jqg8vnjxJQiKYkF_yH3JkFyaRHtUHYzVNey1QrV7TkV_6XKlHx6jgZDXc6jUl9DsEzKmHtjWn8akBb_8H4-VPanmOHl2tKjFDqYBecjwDhcbFYz1k9JEmvWp84I-_QJO-O006hFRJoqcknZp1dWQoVj04h9Rl5QCqEv5sRlKkz0prPq5tXzpygUtTvmEeghckxyAMhxRDJi0qfJFvH7FxD6uO-LdW6uInxS3Y90VHaYXcCPRGxwaiqeKe_9VwdT66Kz8fP127QaPK8ExAzbJFd6WBzmT0IpQsSS-QjD4y4e6JvhvF9NlxV2WNqjblp2hk_orXpSal4YhR__52ADc9WemdfmyMaFBgaJKeoSwRxpY2sg2GRTAX3oh_k70u8oDcKRzb1AaIccfXvroFc'/>
                        <h5>Dell Vostro 5402 Core i7</h5>
                        <div className='cardButton'>
                            <div>
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <div>
                                <button className="button">
                                    <img width={11} height={11} src='/img/Icon.svg'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
