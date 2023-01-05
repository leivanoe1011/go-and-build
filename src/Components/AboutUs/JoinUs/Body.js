import emailjs from 'emailjs-com'
import { collection, getDocs } from 'firebase/firestore'
import { React, useEffect, useRef, useState } from 'react'
import { EnvelopeFill, PinMapFill, TelephoneFill } from 'react-bootstrap-icons'
import { toast } from 'react-toastify'
import { db } from '../../../firebase-config'

// Begin Bootstrap Components
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
// End Bootstrap Components

//Begin Surveys
import TripSurveyGraph from '../../Surveys/TripSurveyGraph'
import TripSurveyWidget from '../../Surveys/TripSurveyWidget'
import april2023OpenTripSurveyJson from './surveys/april2023OpenTripSurveyJson'
import march2023OpenTripSurveyJson from './surveys/march2023OpenTripSurveyJson'
import newYears2022SurveyJson from './surveys/newYears2022SurveyJson'
//End Surveys

import joinUsPic from '../../../img/AboutUs/JoinOurTrip.jpeg'

function Body() {
  const [openTrips, setOpenTrips] = useState([])
  const openTripsCollectionRef = collection(db, 'OpenTrips')
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    // emailjs.sendForm('gmail', 'template_mcp3hp9', form.current, 'Z4AJtOVRkWhL8pEDT')
    emailjs
      .sendForm('gmail', 'template_mpf7dvp', e.target, 'Z4AJtOVRkWhL8pEDT')
      .then(
        () => {
          toast.success('We appreciate your interest in Joining Us', {
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

  const getOpenTrips = async () => {
    const data = await getDocs(openTripsCollectionRef)
    console.log('In get open trips')
    console.log(data)
    setOpenTrips(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useEffect(() => {
    getOpenTrips()
  }, [])

  return (
    <>
      <Container fluid>
        <Row>
          <Col style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
            {' '}
            Join Us on our next Adventure!
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Col>
          <Col>
            <Image src={joinUsPic} style={{ width: '100%' }} alt="Join Us" />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Col>
          <Col>
            <TripSurveyWidget
              tripId="newYear2022"
              surveyConfiguration={newYears2022SurveyJson}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <TripSurveyWidget
              tripId="newYear2022"
              surveyConfiguration={march2023OpenTripSurveyJson}
            />
          </Col>
          <Col>
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Col>
          <Col>
            <TripSurveyWidget
              tripId="newYear2022"
              surveyConfiguration={april2023OpenTripSurveyJson}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <h3>Create your Open Trip !</h3>
            <p className="text-left w-responsive mx-auto mb-5">
              Thank you for your interest in joining us in our next trip! If you
              have any questions or will like to inquire how to create your own
              trip or would like us to create an open trip for other to join,
              please fill out the form below and a member of our team will
              respond to you shortly within 2 business days.
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
