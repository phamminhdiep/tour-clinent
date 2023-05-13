import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './TourEdit.css'
import { Link } from 'react-router-dom';


export default function TourEdit() {
    const { tourId } = useParams();
    const [tour, setTour] = useState({

    });


    useEffect(() => {
        fetchTour();
    }, [tourId]);

    const fetchTour = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/tours/${tourId}`);
            setTour(response.data);
            console.log(tour);
        } catch (error) {
            console.error('Error fetching', error);
        }
    };



    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`http://localhost:8080/tours/${tourId}`, tour);
            // useNavigate(-1);
        } catch (error) {
            console.error(error);
        }
    };
    console.log(tour);
    return (
        <div>
            <h2>Sửa Tour</h2>
            <form>
                <label for="tourName">Tên Tour:</label>
                <input type="text" id="tourName" name="name" value={tour.name} onChange={(event) =>
                    setTour({ ...tour, name: event.target.value })
                } />
                <label for="tourStartDate">Ngày bắt đầu:</label>
                <input type="text" id="tourStartDate" name="star" value={tour.time_start} onChange={(event) =>
                    setTour({ ...tour, time_start: event.target.value })
                } />

                <label for="tourEndDate">Thời gian:</label>
                <input type="text" id="tourEndDate" name="tourEndDate" value={tour.travel_time} onChange={(event) =>
                    setTour({ ...tour, travel_time: event.target.value })
                } />

                <label for="tourDescription">Mô tả:</label>
                <textarea id="tourDescription" name="tourDescription" value={tour.description} onChange={(event) =>
                    setTour({ ...tour, description: event.target.value })
                } ></textarea>

                <label for="tourPrice">Giá:</label>
                <input type="number" id="tourPrice" name="tourPrice" value={tour.price} onChange={(event) =>
                    setTour({ ...tour, price: event.target.value })
                } />

                <label for="tourImage">Hình ảnh:</label>
                <input type="text" id="tourImage" name="tourImage" value={tour.image_url} onChange={(event) =>
                    setTour({ ...tour, image_url: event.target.value })
                } />
                <div className='button-container-edit'>
                    <input type="submit" value="Lưu Tour" onClick={handleSubmit} />
                    <Link to={'/admin'}><button className="button">Trở lại</button></Link>
                </div>
            </form>

        </div>
    )
}
