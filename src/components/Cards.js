import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
        <div className='cards'>
            <h1> Check out These Amazing Deals</h1>
            <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                   <CardItem src='images/veg.jpeg' text='Explore the hidden Waterfall deep inside the Amazon Jungle'
                   label='Hot Deal'
                   path='/services'
                   />
                   <CardItem src='images/breakfast.jpg' text='Travel throug the Island of Bali in a Private Cruise'
                   label='Hot Deal'
                   path='/services'
                   />
                  
                </ul>
                <ul className="cards__items">
                   <CardItem src='images/spices.jpg' text='Explore the hidden Waterfall deep inside the Amazon Jungle'
                   label='Hot Deal'
                   path='/services'
                   />
                   <CardItem src='images/fruit.jpg' text='Travel throug the Island of Bali in a Private Cruise'
                   label='Hot Deal'
                   path='/services'
                   />
                   <CardItem src='images/beans.jpg' text='Explore the hidden Waterfall deep inside the Amazon Jungle'
                   label='Hot Deal'
                   path='/services'
                   />
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Cards