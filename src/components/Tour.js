import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './Tour.css'
import Navbar from './Navbar';

export default function Tour() {

  const { id } = useParams();
  const [tour, setTour] = useState({});

  useEffect(() => {
    const loadTour = () => {
      fetch(`http://localhost:8060/tours/${id}`)
        .then((response) => response.json())
        .then((data) => setTour(data))
    }
    loadTour();
  },[id]);

  const img_path = '/' + tour.imageUrl;
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
                <h3 className="interface-right-textheader">{tour.name}</h3>
                <h3 className="interface-right-textMSP">Quý khách vui lòng đặt cọc 50% tổng giá tour khi đăng ký.</h3>
                <h3 className="interface-right-textMSP">- Hủy tour trước 10 ngày khởi hành, khách chịu phí phạt 70% tổng giá tour.</h3>
              </div>
              <div className="interface-right-price">
                <p className='tour-price'>{tour.price}<sup>đ</sup></p>
              </div>
            </div>

          </div>
          <div className="interface-detail">
            <div className="interface-detail-top">
              <div className="interface-detail-top-header">
                <h3>Chi tiết tour</h3>
              </div>

              <div className="interface-detail-top-detail">
                <h5>Thời gian khởi hành</h5>
                <p>22-5-2023</p>
              </div>
              <div className="interface-detail-top-detail">
                <h5>Thời gian du lịch</h5>
                <p>3N2Đ</p>
              </div>
              <div className="interface-detail-top-detail">
                <h5>Phương tiện di chuyển
                </h5>
                <p>Máy bay, tàu hỏa ,ô tô</p>
              </div>
              <div className="interface-detail-top-detail">
                <h5>Mã tour</h5>
                <p>{tour.id}</p>
              </div>

            </div>
            <div className="interface-detail-bot">
              <div className="interface-detail-bot-header">
                <h3>Chương trình tour</h3>
              </div>


              <div className="interface-detail-bot-detail">
                <p>{tour.description}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
