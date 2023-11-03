import React, { useState, useEffect  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Button, Navbar} from 'react-bootstrap';

const ClockNav = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Fungsi untuk memperbarui waktu saat ini setiap detik
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    // Setel interval pembaruan waktu setiap 1 detik
    const intervalId = setInterval(updateTime, 1000);

    // Membersihkan interval saat komponen tidak lagi digunakan
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const getTimeString = () => {
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <Navbar expand="sm" bg='dark' data-bs-theme="dark">
      <Container>
        {/* <Navbar.Brand href="/" className='judul'>Indonesian Food</Navbar.Brand> */}
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
        <div className="text-white jam">
         {getTimeString()}
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ClockNav