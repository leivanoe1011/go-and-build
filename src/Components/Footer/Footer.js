import React from 'react'

// Begin Bootstrap Components
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
// End Bootstrap Components

import './footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Container fluid>
      <Row className="align-self-center d-flex justify-content-center bg-secondary p-5">
        <Col>
          <h1 style={{ fontSize: '3rem' }} className="text-white">
            Go and Build Hope!
          </h1>
          <br></br>
          <h3 className="text-white" style={{ fontSize: '1rem' }}>
            Help us build a home and improve the quality of life for a community
            in need.{' '}
          </h3>
          <h3 className="text-white" style={{ fontSize: '1rem' }}>
            Go and Build hope for a family in Guatemala.
          </h3>
          <h4 className="text-white" style={{ fontSize: '1rem' }}>
            <strong className="text-white">501(c)(3) </strong>in Progress
          </h4>
        </Col>
        <Col>
          <h5
            style={{ display: 'none', width: '100%' }}
            className="text-white "
          >
            Connect
          </h5>
          <ul
            style={{ display: 'none', width: '100%' }}
            className="connect-links"
          >
            <li>
              <a href="#" className="text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Instragram
              </a>
            </li>
            {/* <li><a href="#" className="text-white">Pinterest</a></li> */}
          </ul>
        </Col>
      </Row>

      <Row className=" align-self-center d-flex justify-content-center bg-dark p-5">
        <Col className="align-self-center d-flex justify-content-center">
          <div className="center-align text-white ">
            &copy; {currentYear} GO-AND-BUILD
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
