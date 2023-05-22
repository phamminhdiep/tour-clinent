import React from 'react'
import { Link } from 'react-router-dom';


export default function HotelCard(props) {
    const imageUrl = props.hotel.imageUrl;
    
    console.log(imageUrl)
    return (
        <div className='card'>
            <div className='card_body'>
                <img className='card-img' alt='image' src={process.env.PUBLIC_URL + imageUrl}></img>
                <h3 className='card-name'>{props.hotel.name}</h3>
                
                <button className='card-button'><Link className='card-link' to={`/hotels/${props.hotel.id}`}>Xem thêm</Link></button>
            </div>
        </div>
    );
}
