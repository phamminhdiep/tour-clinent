import React from 'react'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function HotelAdd() {
    const [hotel, setHotel] = useState({

    });
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(123);
        try {
            await axios.post(`http://localhost:8060/hotels`, hotel);
            navigate(-1);
        } catch (error) {
            console.error(error);
        }

    };



    return (
        <div>
            <h2>Thêm mới khách sạn</h2>
            <form>
                <label for="tourName">Tên Khách Sạn:</label>
                <input type="text" id="tourName" name="tourName" onChange={(event) =>
                    setHotel({ ...hotel, name: event.target.value })
                } />
                <label for="tourImage">Hình ảnh:</label>
                <input type="text " id="tourImage" name="tourImage" onChange={(event) =>
                    setHotel({ ...hotel, imageUrl: event.target.value })
                } />
                <label for="tourImage">Tour id:</label>
                <input type="text " id="tourImage" name="tourImage" onChange={(event) =>
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
