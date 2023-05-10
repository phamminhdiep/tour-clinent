import React from 'react'
import { Link } from 'react-router-dom';
import './TourCard.css'


function TourCard(props) {
    const imageUrl = props.tour.image_url;
    const formattedprice = props.tour.price.toLocaleString('en-US')
    console.log(imageUrl)
    return (
        <div className='card'>
            <div className='card_body'>
                <img className='card-img' alt='image' src={process.env.PUBLIC_URL + imageUrl}></img>
                <h3 className='card-name'>{props.tour.name}</h3>
                <p className='card-price'>{formattedprice} VND</p>
                <button className='card-button'><Link className='card-link'>Xem thêm</Link></button>
            </div>
        </div>
    );
}

export default TourCard;
