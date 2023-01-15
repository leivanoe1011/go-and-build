import { React, useRef } from 'react'
import emailjs from 'emailjs-com'
import { EnvelopeFill, PinMapFill, TelephoneFill } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Begin Bootstrap Components
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
// End Bootstrap Components

import GroupCards from './GroupCards'

import sponsorChild from '../../../img/AboutUs/SponsorChild.jpeg'

import 'react-toastify/dist/ReactToastify.css'

function Body() {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    // emailjs.sendForm('gmail', 'template_mcp3hp9', form.current, 'Z4AJtOVRkWhL8pEDT')
    emailjs
      .sendForm('gmail', 'template_q86eiyr', e.target, 'Z4AJtOVRkWhL8pEDT')
      .then(
        (result) => {
          toast.success('We appreciate your interest in Sponsoring!', {
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
      <Container>
        <Row>
          <Col className="text-center m-5">
            <h1
              className=""
              style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
              Let Us Make a Difference <br></br>in their life! {''}
            </h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </Col>
          <Col>
            <Image style={{ width: '100%' }} src={sponsorChild}></Image>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ fontSize: '0.65rem' }}>
        <GroupCards />
      </Container>

      <Container>
        <Row sm={1} md={1} lg={1} className="pt-lg-2">
          <Col xs lg="6">
            <h2 className="text-left my-4">Help us Sponsor a Child</h2>
            <p className="text-left w-responsive mx-auto mb-5">
              Thank you for your interest in Go and Build Sponsorship! If you
              have any questions, please fill out the form below and a member of
              our team will respond to you shortly within 2 business days.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form onSubmit={handleSubmit} ref={form}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control name="firstName" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control name="lastName" placeholder="Last Name" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="emailAddress">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="emailAddress"
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control name="subject" placeholder="Subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="messageInput">
                <Form.Label>Comment</Form.Label>
                <Form.Control name="messageInput" as="textarea" rows={3} />
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
            <ListGroup className="borderless border border-0">
              <ListGroup.Item className="mb-3 border border-0">
                <TelephoneFill className="col-1" /> Phone: + 1 909 766 0445
              </ListGroup.Item>
              <ListGroup.Item className="mb-3 border border-0">
                <PinMapFill className="col-1" />
                Address: 10 W Bay State Street #1274, Alhambra CA 91802, USA
              </ListGroup.Item>
              <ListGroup.Item className="mb-3 border border-0">
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
