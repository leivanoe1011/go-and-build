import { React, useRef } from 'react'
import emailjs from 'emailjs-com'
import { EnvelopeFill, PinMapFill, TelephoneFill } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
// Begin Bootstrap Components
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

// End Bootstrap Components

// Begin Images
import kidImage from '../../img/Img_child_outdoor_edited_20220815.JPG'
import img1 from '../../img/WhatWeDo/IMG_1605.PNG'
import img2 from '../../img/WhatWeDo/SamuelSon.jpg'
import img3 from '../../img/WhatWeDo/IMG_1602.PNG'
// End Images

function Body() {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('In handle submit')
    console.log(e.target)

    // emailjs.sendForm('gmail', 'template_mcp3hp9', form.current, 'Z4AJtOVRkWhL8pEDT')
    emailjs
      .sendForm('gmail', 'template_mcp3hp9', e.target, 'Z4AJtOVRkWhL8pEDT')
      .then(
        (result) => {
          toast.success('We appreciate your message!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            className: 'custom-toast-message',
          })
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <>
      <Container fluid>
        <Row sm={1} md={1} lg={1} className="pt-lg-2">
          <Col xs lg="6">
            <h2 className="text-left my-4">Contact us</h2>
            <p className="text-left w-responsive mx-auto mb-5">
              Thank you for your interest in Go and Build! If you have any
              questions, please fill out the form below and a member of our team
              will respond to you shortly within 2 business days.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form onSubmit={handleSubmit} ref={form}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label htmlFor="firstName">First Name</Form.Label>
                  <Form.Control placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                  <Form.Label htmlFor="lastName">Last Name</Form.Label>
                  <Form.Control placeholder="Last Name" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="emailAddress">
                <Form.Label htmlFor="emailAddress">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="subject">
                <Form.Label htmlFor="subject">Subject</Form.Label>
                <Form.Control placeholder="Subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="messageInput">
                <Form.Label htmlFor="messageInput">Comment</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Row>
                <Col xs lg="4">
                  <Button className="mb-3" variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>
            <ListGroup class="borderless">
              <ListGroup.Item className="mb-3">
                <TelephoneFill className="col-1" /> Phone: + 1 909 766 0445
              </ListGroup.Item>
              <ListGroup.Item className="mb-3">
                <PinMapFill className="col-1" />
                Address: 10 W Bay State Street #1274, Alhambra CA 91802, USA
              </ListGroup.Item>
              <ListGroup.Item className="mb-3">
                <EnvelopeFill className="col-1" />
                Email: <u style={{ color: 'blue' }}>partner@goandbuild.org</u>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Body
