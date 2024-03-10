import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SecondProjectCard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
         <Card style={{borderRadius:"20px", marginBottom:"20px"}}>
                <Card.Img variant="top" src="/secondproject.png" style={{maxHeight: "350px", objectFit:"cover", borderRadius:"20px", marginTop:"15px"}} />
                <Card.Body>
                  <Card.Title>Javascript frameworks</Card.Title>
                  <Card.Text>
                  <h6>Made with: </h6>
                    <p>Vite, Typescript and chakra UI</p>
                    <h6>Description: </h6>
                    <p>A e-commerce website</p>
                  </Card.Text>
                  <Button href='https://github.com/JonnyNewfarm/ecom-project' style={{background:"#270d2e", width:"150px", marginRight:"10px"}}>Github repo</Button>
                  <Button href='https://grand-cajeta-40065b.netlify.app/' style={{background:"#270d2e", width:"150px", marginRight:"10px"}}>Netlify link</Button>
                  <Button style={{background:"#270d2e", width:"150px",  marginRight:"10px"}} onClick={handleShow}>
        User stories
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Stories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
                <li>The Homepage should have a list of all the products.</li>
                <li>search bar that filters products when typing in a product name.</li>
                <li>Clicking on a product should take a user to an individual product page.</li>
                <li>You pages should use a Layout component that contains a header and footer.</li>
                <li>Cart icon component that acts as a button as well as displays the current number of items in the cart.</li>
                <li>discountedPrice property to display the price of the product. If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. Calculate what this discount is and display it on the page.</li>
                <li>Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total.</li>
                <li>The Cart page will have a Checkout button.</li>
                <li>Clicking this Checkout button then goes to a Checkout success page.</li>
                <li>The Checkout success page will display a message to the user notifying them that their order was successful.</li>
                <li>The cart must be cleared if the user gets to the Checkout success page.</li>
                <li>must include form-validation.</li>
               
         
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{background:"#270d2e"}} onClick={handleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>

                </Card.Body>
              </Card>
        
        </>
      )
}

export default SecondProjectCard