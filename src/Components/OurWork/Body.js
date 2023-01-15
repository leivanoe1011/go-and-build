import React from 'react'
import ReactPlayer from 'react-player'

// Begin Bootstrap Components
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
// End Bootstrap Components

// Begin Images
import kidImage from '../../img/Img_child_outdoor_edited_20220815.JPG'
// End Images

// import kidImage from '../../img/Home/48086a28-4878-4682-81c6-300770c87d4c.jpg'

function Body() {
  const videoGuatemala = 'https://vimeo.com/746620955'

  const playerHeight = '42vw' // 800 px
  const playerWidth = '62.5vw' // 1200 px

  return (
    <>
      <Container fluid>
        <Row sm={1} md={1} lg={1} className="d-flex justify-content-center">
          <Col className="text-center">
            <Row sm={1} md={1} lg={1} className="d-flex justify-content-center">
              <Col className="col-sm-12 col-md-10 col-lg-10 text-center">
                <h1
                  className="my-2"
                  style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                >
                  Our Work
                </h1>

                <div style={{ width: '75%', margin: 'auto' }} className="pt-2">
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

      <Container fluid style={{ display: 'none' }}>
        <Row
          sm={1}
          md={1}
          lg={1}
          className="  justify-content-center
                    align-middle
                    wow animate__animated animate__fadeInLeft animate__slower"
        >
          <Col className="text-center p-4 mt-5 after-about">
            <div className="col-sm-10 col-md-6 col-lg-4 px-2 align-text-bottom">
              <img style={{ width: '100%', margin: 'auto' }} src={kidImage} />
            </div>

            <div className="col-sm-10 col-md-6 col-lg-5 my-5">
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
