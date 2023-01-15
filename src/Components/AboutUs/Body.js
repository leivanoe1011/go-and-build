import { React } from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

// Begin Bootstrap Components
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
// End Bootstrap Components

// images
import founders from '../../img/AboutUs/Founders.PNG'
import joinOurTrip from '../../img/AboutUs/JoinOurTrip.jpeg'
import sponsorChild from '../../img/AboutUs/SponsorChild.jpeg'
//End Image Line

function Body() {
  const videoGuatemala = 'https://vimeo.com/746620955'
  const playerHeight = '42vw' // 800 px
  const playerWidth = '62.5vw' // 1200 px

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center">
            <h1
              className="my-2"
              style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
              Our Work About us
            </h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center text-center">
            <div style={{ width: '75%', margin: 'auto' }} className="pt-2">
              <h5>
                Through building safe, secure, and habitable homes, we can help
                Guatemalans improve their living conditions and make a
                meaningful difference in the lives of families living in extreme
                poverty.
              </h5>
              <br></br>
              <h5>With your support, we can change their story!</h5>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="justify-content-around">
          <Col>
            <Link
              to="/aboutus/founders"
              style={{ color: 'white' }}
              activeStyle={{ color: 'red' }}
            >
              <Image style={{ width: '100%' }} src={founders} rounded />
            </Link>
          </Col>
          <Col>
            <Link
              to="/aboutus/joinus"
              style={{ color: 'white' }}
              activeStyle={{ color: 'red' }}
            >
              <Image style={{ width: '100%' }} src={joinOurTrip} rounded />
            </Link>
          </Col>
          <Col>
            <Link
              to="/aboutus/sponsorship"
              style={{ color: 'white' }}
              activeStyle={{ color: 'red' }}
            >
              <Image style={{ width: '100%' }} src={sponsorChild} rounded />
            </Link>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="d-flex justify-content-center wow animate__animated animate__zoomIn animate__slower">
            <ReactPlayer
              // className='react-player'
              url={videoGuatemala}
              playing={true}
              muted={false}
              width={playerWidth}
              height={playerHeight}
              controls={true}
              // onPause={playerPause}
            />
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ display: 'none' }}>
        <Row
          className=" 
                    justify-content-center
                    align-middle
                    wow animate__animated animate__fadeInLeft animate__slower"
        >
          <Col>
            <div className="px-2 align-text-bottom">
              <img style={{ width: '100%', margin: 'auto' }} src={founders} />
            </div>
          </Col>

          <Col>
            <div className="my-5">
              <h1
                className="m-5"
                style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
              >
                GO AND BUILD
              </h1>

              <br></br>
              <h5>
                An organization committed to improve health and safety living
                conditions for families in extreme poverty.
              </h5>
              <br></br>
              <h5>
                Through the construction of sustainable homes, we provide a
                secure and dignified place to live.
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Body
