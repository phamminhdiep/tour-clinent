import React from 'react'
import { useParams } from 'react-router';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Hotel() {

    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    const [tour, setTour] = useState({});

    const loadHotel = () => {
        fetch(`http://localhost:8060/hotels/${id}`)
          .then((response) => response.json())
          .then((data) => setHotel(data))
    }   

    const loadTour = () => {
        fetch(`http://localhost:8060/hotels/tours/${id}`)
          .then((response) => response.json())
          .then((data) => setTour(data))
    }

    useEffect(() => {
      loadHotel();
      loadTour();
    },[id]);


  
  
    const img_path = '/' + hotel.imageUrl;
    return (
      <div>
        <Navbar></Navbar>
        <div className="product-interface">
          <div className="grid">
            <div className="interface-container">
              <div className="interface-container-left">
                <div className="interface-bigimg">
                  <img src = {img_path} alt="" className="interface-bigimg-side"></img>
                </div>
              </div>
              <div className="interface-container-right">
                <div className="interface-container-right-top">
                  <h3 className="interface-right-textheader">{hotel.name}</h3>
                  <h3 className="interface-right-textMSP">Chúng tôi cam kết mang lại trải nghiệm tuyệt vời nhất cho khách hàng</h3>
                </div>
                <div>
                    <h3>Mọi chi phí đã được thanh toán trong gói <Link to={`/tours/${tour.id}`}>{tour.name}</Link></h3>
                </div>
              </div>
  
            </div>
            
          </div>
        </div>
      </div>
    )
}
