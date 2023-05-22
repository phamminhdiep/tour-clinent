import React from 'react'
import './TourAdd.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function TourAdd() {

    const [tour, setTour] = useState({
        
    });
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(123);
        try {
            await axios.post(`http://localhost:8060/tours`, tour);
            navigate(-1);
        } catch (error) {
            console.error(error);
        }
        
    };

   

    return (
        <div>
            <h2>Thêm mới Tour</h2>
            <form>
                <label for="tourName">Tên Tour:</label>
                <input type="text" id="tourName" name="tourName" onChange={(event) =>
                    setTour({ ...tour, name: event.target.value })
                } />

                <label for="tourDescription">Mô tả:</label>
                <textarea id="tourDescription" name="tourDescription" onChange={(event) =>
                    setTour({ ...tour, description: event.target.value })
                }></textarea>

                <label for="tourPrice">Giá:</label>
                <input type="number" id="tourPrice" name="tourPrice" onChange={(event) =>
                    setTour({ ...tour, price: event.target.value })
                } />

                <label for="tourImage">Hình ảnh:</label>
                <input type="text " id="tourImage" name="tourImage" onChange={(event) =>
                    setTour({ ...tour, imageUrl: event.target.value })
                }/>
                <br></br>
                <input type="submit" value="Lưu Tour" onClick={handleSubmit}/>
                <br></br>
                <br></br>
                <Link to ={'/admin'}><button class="cancel" className='button'>Trở lại</button></Link>
            </form>
            
        </div>
    )
}
