import { React, useState } from 'react'

//
import { db } from '../../../firebase-config'
//

// Begin Bootstrap Components
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
// End Bootstrap Components

// images
import joseFounder from '../../img/Founders/JoseFounder.jpeg'
import mannyFounder from '../../img/Founders/MannyFounder.jpeg'
import noeFounder from '../../img/Founders/NoeLesterFounder.jpeg'
//End Image Line

function Body() {
  const [openTrips, setOpenTrips] = useState([])
  const openTripsCollectionRef = collection(db, 'OpenTrips')

  return (
    <>
      <Container>
        <Row className=" d-flex justify-content-center">
          <Col className="text-center">
            <h1
              className="my-2"
              style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
              Get to know the Founders
            </h1>

            <div style={{ width: '75%', margin: 'auto' }} className="pt-2">
              <h5>
                By building a community, we can inspire and touch many lives. We
                hoping what inspired us, will inspire you and join us. Together
                we can make a difference rebuild the lives of those in need.
              </h5>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Begin Jose Founder */}
      <Container>
        <Row>
          <Col className="align-self-center ">
            <div className="mx-2">
              <h1 className="my-3">Jose Leiva</h1>

              <h5>
                Founder and general director on the Guatemala side.
                <br></br>
                JD oversees the daily operations on the field. He has been
                working on the social development area in Guatemala for more
                than 10 years, graduated in management in social work, JD has a
                pasión for management, logistics and coordination, triathlons,
                futbol, languages and is always looking for new challenges.
              </h5>
            </div>
          </Col>

          <Col className="col-sm-12 col-md-12 col-lg-6 align-self-center">
            <Image style={{ width: '100%' }} src={joseFounder} />
          </Col>
        </Row>
      </Container>
      {/* Begin Jose Founder */}

      {/* Begin Manny Founder */}
      <Container>
        <Row>
          <Col className="col-sm-12 col-md-12 col-lg-6 align-self-center">
            <Image style={{ width: '100%' }} src={mannyFounder} />
          </Col>
          <Col className="align-self-center ">
            <div className="mx-2">
              <h1 className="my-3">Manny Gomez</h1>

              <h5>
                Founder and general director on the Guatemala side.
                <br></br>
                JD oversees the daily operations on the field. He has been
                working on the social development area in Guatemala for more
                than 10 years, graduated in management in social work, JD has a
                pasión for management, logistics and coordination, triathlons,
                futbol, languages and is always looking for new challenges.
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Begin Manny Founder */}

      {/* Begin Noe Founder */}
      <Container>
        <Row>
          <Col className="align-self-center ">
            <div className="mx-2">
              <h1 className="my-3">Noe Leiva</h1>

              <h5>
                Founder and general director on the Guatemala side.
                <br></br>
                JD oversees the daily operations on the field. He has been
                working on the social development area in Guatemala for more
                than 10 years, graduated in management in social work, JD has a
                pasión for management, logistics and coordination, triathlons,
                futbol, languages and is always looking for new challenges.
              </h5>
            </div>
          </Col>

          <Col className="col-sm-12 col-md-12 col-lg-6 align-self-center">
            <Image style={{ width: '100%' }} src={noeFounder} />
          </Col>
        </Row>
      </Container>
      {/* Begin Noe Founder */}
    </>
  )
}

export default Body
