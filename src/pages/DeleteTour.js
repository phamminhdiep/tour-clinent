import React, { useEffect, useState } from 'react'
import "./DeleteTour.css"
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function DeleteTour() {

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
        console.log(123)
        try {
            await axios.delete(`http://localhost:8080/tours/${tourId}`, tour);
            
        } catch (error) {
            console.error(error);
        }
        
    };
    console.log(tour);

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
