import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Admin.css'
import Navbar from '../components/Navbar';
import {  Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default function Admin() {
    const [tours, setTours] = useState([]);
    

    useEffect(() => {
        fetchTours();
        
    }, []);

    const fetchTours = async () => {
        try {
            const response = await axios.get('http://localhost:8080/tours');
            setTours(response.data);
            console.log(tours);
        } catch (error) {
            console.error('Error fetching', error);
        }
    };



    return (

        <div>
           
            <Table striped bordered hover>
                <thead>
                    <tr >
                        <th>Id</th>
                        <th>Tên</th>
                        <th>Ngày bắt đầu</th>
                        <th>Thời gian</th>
                        <th>Giá</th>
                        <th>Ảnh</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>
                    {tours.map((data) =>
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.time_start}</td>
                            <td>{data.travel_time}</td>
                            <td>{data.price}</td>
                            <td>{data.image_url}</td>
                            <td>{data.description}</td>
                            <td className="actions">
                                <Link >Edit   </Link>
                                <Link >Delete   </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Link><Button variant="primary">Thêm mới tour</Button></Link>
            <br></br>
            <Link to={'/'}><Button variant="primary">Trở lại</Button></Link>
            
            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên người dùng</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th className="actions">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((data) => {
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone_number}</td>
                            <td>{data.address}</td>
                            <td className="actions">
                                <Link >Edit</Link>
                                <Link >Delete</Link>
                            </td>
                        </tr>
                    })}

                </tbody>
            </Table> */}
        </div>
    )
}