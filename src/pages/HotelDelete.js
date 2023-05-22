import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function HotelDelete() {
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState({
        
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetchHotel();
    }, [hotelId]);

    const fetchHotel = async () => {
        try {
            const response = await axios.get(`http://localhost:8060/hotels/${hotelId}`);
            setHotel(response.data);
            console.log(hotel);
        } catch (error) {
            console.error('Error fetching', error);
        }
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(123)
        try {
            await axios.delete(`http://localhost:8060/hotels/${hotelId}`, hotel);
            navigate(-1);
        } catch (error) {
            console.error(error);
        }
        
    };
    

    return (
        <div>
            <div class="container">
                <h2>Xác nhận xóa</h2>
                <p>Bạn có chắc chắn muốn xóa không?</p>
                <div class="button-container">
                
                <Link to ={'/admin'}><button class="cancel">Cancel</button></Link>
                    <button onClick={handleSubmit} className='button'>Xóa</button>
                </div>
            </div>
            
            </div>
    )
}
