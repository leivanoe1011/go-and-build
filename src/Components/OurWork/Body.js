import React from 'react'

// Begin Bootstrap Components
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
// End Bootstrap Components

// Begin Images
import kidImage from '../../img/Img_child_outdoor_edited_20220815.JPG'
import img1 from '../../img/WhatWeDo/IMG_1605.PNG'
import img2 from '../../img/WhatWeDo/SamuelSon.jpg'
import img3 from '../../img/WhatWeDo/IMG_1602.PNG'
// End Images

function Body() {
  return (
    <>
      <Container fluid>
        <Row sm={1} md={1} lg={1} className="d-flex justify-content-center">
          <Col className="text-center">
            <Row sm={1} md={1} lg={1} className="d-flex justify-content-center">
              <Col className="col-sm-12 col-md-10 col-lg-10 text-center">
                <h1 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                  Our Mission, Vision and Values
                </h1>
                <br></br>

                <div className="p-4" style={{ width: '75%', margin: 'auto' }}>
                  <h5>
                    <strong>Go and Build</strong> not only seeks to provide
                    housing to those in need, but also help improve the health
                    and safety of the Guatemalan community through advocacy,
                    partnership and support.
                  </h5>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row sm={1} md={1} lg={1} className="d-flex justify-content-center">
          <Col>
            <Carousel className="col-sm-12 col-md-10 col-md-10">
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  style={{ width: '125%' }}
                  src={img2}
                  alt="First slide"
                />
                {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  style={{ width: '100%', height: '100%' }}
                  src={img1}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  style={{ width: '100%', height: '100%' }}
                  src={img3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row sm={1} md={1} lg={1} className="d-flex justify-content-center">
          <Col className="text-center p-4 mt-5 after-about">
            <Row sm={1} md={1} lg={1} className="d-flex justify-content-center">
              <Col>
                <h1
                  className="p-3"
                  style={{ color: 'white', textTransform: 'uppercase' }}
                >
                  GO AND BUILD VISION
                </h1>

                <div>
                  <h5 style={{ color: 'white' }}>
                    Our vision is to help families make dreams of stability and
                    hope a reality.
                  </h5>

                  <br></br>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row
          sm={1}
          md={1}
          lg={2}
          className="justify-content-center
                    py-5
                    align-middle
                    wow animate__animated animate__fadeInLeft animate__slower"
        >
          <Col>
            <Image style={{ width: '100%', margin: 'auto' }} src={kidImage} />
          </Col>
          <Col>
            <h1
              className=" m-5"
              style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
              Go and Build Core Values
            </h1>

            <h5>
              <strong>Equity</strong> - creating collaborative partnerships to
              eliminate barriers that perpetuate social, economic, and
              environmental disparities through a commitment to the communities
              we serve.
            </h5>

            <br></br>
            <h5>
              <strong>Compassion</strong> – practicing empathy, kindness and
              respect and offering comfort to those in need.
            </h5>

            <br></br>
            <h5>
              <strong>Sustainability</strong> – participating in research of
              energy, transportation, water, waste and food systems that
              contribute to the construction of a sustainable community.
            </h5>

            <br></br>
            <h5>
              <strong>Teamwork</strong> - committing to the support of one
              another while building and nurturing meaningful relationships to
              meet our goals.
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Body
