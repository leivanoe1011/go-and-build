import React from 'react'
import WOW from 'wowjs'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import Container from 'react-bootstrap/Container'
import familyHome from '../../img/Home/MajoSamuel.jpg'

function VideoGuate() {
  // Same as component diMount
  React.useEffect(() => {
    // Runs after the first render() lifecycle
    new WOW.WOW().init()
  }, [])

  return (
    <>
      <Container fluid>
        <Row className="row d-flex justify-content-center">
          <Col className="col-sm-12 col-md-12 col-lg-12 text-center mt-5 after-about">
            <Row className="row d-flex justify-content-center m-1">
              <Col className="col-sm-12 col-md-10 col-lg-10">
                <h1
                  className="pt-2"
                  style={{ textTransform: 'uppercase', color: 'white' }}
                >
                  Let Us Build a Better Future for Guatemala!
                </h1>
                <br></br>

                <div>
                  <h5 style={{ color: 'white' }}>
                    With a population of approximately 18 million, the nation of
                    Guatemala is experiencing a housing crisis. Millions living
                    in unsafe and unhealthy conditions, the current housing
                    deficit is at over 2 million homes.
                  </h5>
                  <br></br>
                  <h5 style={{ color: 'white' }}>
                    Over seventy percent of the homes in Guatemala have been
                    determined to be inadequate, lacking basic services such as
                    drinking water or requiring significant repairs; and this
                    deficit increases almost 3 percent each year.
                  </h5>
                  <br></br>
                  <h5 style={{ color: 'white' }}>
                    Shelter is a basic human necessity and Guatemalan citizens
                    deserve to live in a stable and secure home.
                  </h5>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row
          className="row 
                    justify-content-sm-center
                    justify-content-md-center 
                    justify-content-lg-center 
                    py-5
                    wow animate__animated animate__fadeInLeft animate__slower"
        >
          <Col className="col-sm-10 col-md-12 col-lg-6 align-self-center ">
            <div className="mx-2">
              <h5>
                Almost half of all people in Guatemala live in poverty. For many
                families, living in a home is a dream; with average earnings of
                <strong> less than five dollars per day </strong>
                making it nearly impossible.
              </h5>
              <br></br>
              <h5>
                Poverty has many consequences, including poor sanitation, food
                insecurity, limited access to education, healthcare, and unsafe
                environmental conditions.
              </h5>
            </div>
          </Col>

          <Col className="col-sm-12 col-md-12 col-lg-6 align-self-center">
            <Image style={{ width: '100%' }} src={familyHome} rounded />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default VideoGuate
