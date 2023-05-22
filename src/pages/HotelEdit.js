import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';


export default function HotelEdit() {
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
        } catch (error) {
            console.error('Error fetching', error);
        }
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:8060/hotels/${hotelId}`, hotel);
            navigate(-1)
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <div>
            <h2>Sửa thông tin khách sạn</h2>
            <form>
                <label for="tourName">Tên Khách Sạn:</label>
                <input type="text" id="tourName" name="tourName" value={hotel.name} onChange={(event) =>
                    setHotel({ ...hotel, name: event.target.value })
                } />
                <label for="tourImage">Hình ảnh:</label>
                <input type="text " id="tourImage" name="tourImage" value={hotel.imageUrl} onChange={(event) =>
                    setHotel({ ...hotel, imageUrl: event.target.value })
                } />
                <label for="tourImage">Tour id:</label>
                <input type="text " id="tourImage" name="tourImage" value={hotel.tourId} onChange={(event) =>
                    setHotel({ ...hotel, tourId: event.target.value })
                } />
                <br></br>
                <input type="submit" value="Lưu Khách Sạn" onClick={handleSubmit} />
                <br></br>
                <br></br>
                <Link to={'/admin'}><button class="cancel" className='button'>Trở lại</button></Link>
            </form>

        </div>
    )
}
