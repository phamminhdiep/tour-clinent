import React from 'react'
import { useState, useEffect } from "react";
import TourCard from '../components/TourCard';
import axios from 'axios';
import Navbar from '../components/Navbar';
import './Tours.css'



export default function Tours() {

  const [container, setContainer] = useState([]);

  useEffect(() => {
    loadTours();
  }, []);


  const loadTours = async () => {
    try{
      const res = await axios.get('http://localhost:8060/tours')
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
          <TourCard key={item.id} tour={item}></TourCard>
        )}
      </div>
    </div>
  )
}
