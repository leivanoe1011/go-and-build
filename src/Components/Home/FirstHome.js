import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import './home.css'

// images
import img4 from '../../img/Home/home-that-needs-rebuilt.jpg'
import img3 from '../../img/Home/759203aa-b36e-482e-a437-f12cee9b126d.jpg'
import img1 from '../../img/Home/SamuelDaughter.jpg'
import img2 from '../../img/Home/old_house.PNG'
//End Image Line

function FirstHome() {
  const [playerPause, setPlayerPause] = useState(true)

  const videoGuatemala = 'https://vimeo.com/747473996'

  const playerHeight = '42vw' // 800 px
  const playerWidth = '62.5vw' // 1200 px

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 100) {
        if (!playerPause) {
          setPlayerPause(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-sm-12 col-md-12 col-lg-12 text-center ">
            <Row className="row d-flex justify-content-center">
              <Col className="col-sm-12 col-md-10 col-lg-12">
                <h1 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                  Help Create a Brighter Future!{' '}
                </h1>

                <div className="pt-5" style={{ width: '75%', margin: 'auto' }}>
                  <h5>
                    Through building safe, secure, and habitable homes, we can
                    help Guatemalans improve their living conditions and make a
                    meaningful difference in the lives of families living in
                    extreme poverty.
                  </h5>
                  <br></br>
                  <h5>With your support, we can change their story!</h5>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center wow animate__animated animate__zoomIn animate__slower">
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

      {/* image container */}
      <Container fluid className="py-5">
        <Row xs={1} md={2} lg={3}>
          <Col>
            <Image style={{ width: '100%' }} src={img4} rounded />
          </Col>
          <Col>
            <Image style={{ width: '100%' }} src={img1} rounded />
          </Col>
          <Col>
            <Image style={{ width: '100%' }} src={img3} rounded />
          </Col>
        </Row>
      </Container>
      {/* end image container */}

      <Container fluid>
        <Row
          xs={1}
          md={2}
          lg={2}
          className="row wow animate__animated animate__fadeInLeft animate__slower"
        >
          <Col className="my-auto">
            <Image style={{ width: '100%' }} src={img2} rounded />
          </Col>

          <Col>
            <h1
              className="m-3"
              style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
              GO AND BUILD
            </h1>

            <h5 className="m-3">
              An organization committed to improve health and safety living
              conditions for families in extreme poverty.
            </h5>
            <br></br>
            <h5 className="m-3">
              Through the construction of sustainable homes, we provide a secure
              and dignified place to live.
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FirstHome
