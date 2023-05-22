import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Admin.css'
import Navbar from '../components/Navbar';
import {  Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default function Admin() {
    const [tours, setTours] = useState([]);
    const [hotels, setHotels] = useState([]);
    

    useEffect(() => {
        fetchTours();
        fetchHotels();
    }, []);

    const fetchTours = async () => {
        try {
            const response = await axios.get('http://localhost:8060/tours');
            setTours(response.data);
            console.log(tours);
        } catch (error) {
            console.error('Error fetching', error);
        }
    };

    const fetchHotels = async () => {
        try {
            const response = await axios.get('http://localhost:8060/hotels');
            setHotels(response.data);
            console.log(hotels);
        } catch (error) {
            console.error('Error fetching', error);
        }
    };



    return (

        <div>
            <div className='tours-table'>
            <h2>Danh Sách Tour</h2>
            <Table striped bordered hover >
                
                <thead>
                    <tr >
                        <th>Id</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Ảnh</th>
                        <th>Mô tả</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tours.map((data) =>
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>{data.imageUrl}</td>
                            <td>{data.description}</td>
                            <td className="actions">
                                <Link to={`/admin/edit/tours/${data.id}`}> Edit </Link>
                                <Link to={`/admin/delete/tours/${data.id}`}> Delete </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <div className='button-container'>
                <Link to={'/admin/add/tours'}><Button variant="primary" className='button'>Thêm mới tour</Button></Link>
                <Link to={'/'}><Button variant="primary" className='button'>Trở lại</Button></Link>
            </div>
            </div>
            
           <div className='hotel-table'>
            <h2>Danh Sách Khách Sạn</h2>
           <Table striped bordered hover >
                <thead>
                    <tr >
                        <th>Id</th>
                        <th>Tên</th>
                        <th>Ảnh</th>
                        <th>Id Tour</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {hotels.map((data) =>
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.imageUrl}</td>
                            
                            <td>{data.tourId}</td>
                            <td className="actions">
                                <Link to={`/admin/edit/hotels/${data.id}`}> Edit </Link>
                                <Link to={`/admin/delete/hotels/${data.id}`}> Delete </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <div className='button-container'>
                <Link to={'/admin/add/hotels'}><Button variant="primary" className='button'>Thêm mới khách sạn</Button></Link>
                <Link to={'/'}><Button variant="primary" className='button'>Trở lại</Button></Link>
            </div>
            
           </div>
            
            
        </div>
    )
}