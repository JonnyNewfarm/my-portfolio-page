import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

export const ThirdProjectCard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
         <Card style={{borderRadius:"20px", marginBottom:"30px"}}>
                <Card.Img variant="top" src="/thirdproject.png" style={{maxHeight: "350px", objectFit:"cover", borderRadius:"20px", marginTop:"15px"}} />
                <Card.Body>
                  <Card.Title>Project exam 2</Card.Title>
                  <Card.Text>
                    <h6>Made with: </h6>
                    <p>Vite and Bootstrap</p>
                    <h6>Description: </h6>
                    <p>A accommodation booking site called Holidaze.</p>
                  
                  
                  </Card.Text>
                  <Button style={{background:"#270d2e", width:"150px",  marginRight:"10px"}} onClick={handleShow}>
        User stories
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Stories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
                <li>A user may view a list of Venues</li>
                <li>A user may search for a specific Venue</li>
                <li>A user may view a specific Venue page by id</li>
                <li>A user may view a calendar with available dates for a Venue</li>
                <li>A user with a stud.noroff.no email may register as a customer</li>
                <li>A registered customer may create a booking at a Venue</li>
                <li>A registered customer may view their upcoming bookings</li>
                <li>A user with a stud.noroff.no email may register as a Venue manager</li>
                <li>A registered Venue manager may create a Venue</li>
                <li>A registered Venue manager may update a Venue they manage</li>
                <li>A registered Venue manager may delete a Venue they manage</li>
                <li>A registered Venue manager may view bookings for a Venue they manage</li>
                <li>A registered user may login</li>
                <li>A registered user may update their avatar</li>
                <li>A registered user may logout
</li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{background:"#270d2e"}} onClick={handleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>
                  <Button href='https://github.com/JonnyNewfarm/Holidaze' style={{background:"#270d2e", width:"150px"}}>Github repo</Button>
                </Card.Body>
              </Card>
        
        </>
      )
  
}
