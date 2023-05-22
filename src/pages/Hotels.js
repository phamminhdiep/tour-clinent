import React from 'react'
import HotelCard from './HotelCard';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

export default function Hotels() {
  
    const [container, setContainer] = useState([]);

    useEffect(() => {
      loadHotels();
    }, []);
  
  
    const loadHotels = async () => {
      try{
        const res = await axios.get('http://localhost:8060/hotels')
        console.log(res.data)
        setContainer(res.data)
      }catch(error){
        console.log('error!!', error)
      }
    }
    return (
      <div>
        <Navbar></Navbar>
        <div className='tours-container'>
          {container.map((item) =>
            <HotelCard key={item.id} hotel={item}></HotelCard>
          )}
        </div>
      </div>
    )
}
