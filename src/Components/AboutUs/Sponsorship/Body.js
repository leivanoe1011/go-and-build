import React from 'react'

// Begin Bootstrap Components
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
// End Bootstrap Components

import GroupCards from './GroupCards'

import sponsorChild from '../../../img/AboutUs/SponsorChild.jpeg'

import 'react-toastify/dist/ReactToastify.css'

function Body() {
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
    </>
  )
}

export default Body
