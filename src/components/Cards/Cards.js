import React from 'react'
import CardItem from '../CardItem/CardItem'

import './Cards.css'

import amazon from '../../images/img-9.jpg'
import luxury from '../../images/img-2.jpg'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                         src={amazon} 
                         text="Explore the hidden waterfall deep inside the amazon jungle"
                         label="Adventure"
                         path="/services"
                        />
                        <CardItem
                            src={luxury}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                            />
                    </ul>
                    <ul className='cards__items'>
            <CardItem
              src={amazon}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={amazon}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={luxury}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>

               
                </div>
            </div>
        </div>
    )
}

export default Cards
