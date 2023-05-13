import React from 'react'
import './TourAdd.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function TourAdd() {

    const [tour, setTour] = useState({
        
    });


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(123);
        try {
            await axios.post(`http://localhost:8080/tours`, tour);
            // useNavigate(-1);
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

                <label for="tourStartDate">Ngày bắt đầu:</label>
                <input type="text" id="tourStartDate" name="tourStartDate" onChange={(event) =>
                    setTour({ ...tour, time_start: event.target.value })
                } />

                <label for="tourEndDate">Thời gian:</label>
                <input type="text" id="tourEndDate" name="tourEndDate" onChange={(event) =>
                    setTour({ ...tour, travel_time: event.target.value })
                }/>

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
                    setTour({ ...tour, image_url: event.target.value })
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
