import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import image from '../image/halong.png'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <img className='hero' alt='Ha Long Bay' src={image}></img>
        <div className='content'>
            <h1 className='title'>Bắt đầu chuyến du lịch của bạn</h1>
            <Link className='login-button' to={'/login'}>Đăng nhập</Link>
        </div>
    </div>
  )
}
