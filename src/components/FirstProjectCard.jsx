
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FirstProjectCard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
     <Card style={{borderRadius:"20px", marginBottom:"30px"}}>
            <Card.Img variant="top" src="/firstproject.png" style={{maxHeight: "350px", objectFit:"cover", borderRadius:"20px", marginTop:"15px"}} />
            <Card.Body>
              <Card.Title>Semester project 2</Card.Title>
              <Card.Text>
              <h6>Made with: </h6>
                    <p>Vanilla JS and Bootstrap</p>
                    <h6>Description: </h6>
                    <p>A auction website</p>
             
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
            <li>A user with a stud.noroff.no email may register</li>
            <li>A registered user may login
</li>
            <li>A registered user may logout
</li>
            <li>A registered user may update their avatar
</li>
            <li>A registered user may view their total credit
</li>
            <li>A registered user may create a Listing with a title, deadline date, media gallery and description</li>
            <li>A registered user may add a Bid to another user’s Listing</li>
            <li>A registered user may view Bids made on a Listing</li>
            <li>An unregistered user may search through Listings
Technical restrictions
</li>
            
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{background:"#270d2e"}} onClick={handleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>

              <Button href='https://github.com/JonnyNewfarm/Semester-Project-2' style={{background:"#270d2e", width:"150px"}}>Github repo</Button>
            </Card.Body>
          </Card>
    
    </>
  )
}

export default FirstProjectCard