import React from 'react'
import { NavbarComp } from '../components/Navbar'
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
<>

<NavbarComp />
<h1 style={{textAlign:"center", marginTop:"50px", color:"#270d2e"}}>Send me an email </h1>

<Row style={{justifyContent:"center"}}>

<Form style={{maxWidth:"700px", marginTop:"50px", background:"white", padding:"20px", borderRadius:"20px"}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button style={{background:"#270d2e", width:"150px"}}>Send email</Button>
    </Form>
</Row>



</>

   
  )
}

export default Contact