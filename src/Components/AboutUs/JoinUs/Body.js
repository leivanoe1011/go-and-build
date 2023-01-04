import React from 'react'

// Begin Bootstrap Components
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
// End Bootstrap Components

//Begin Surveys
import TripSurveyGraph from '../../Surveys/TripSurveyGraph'
import TripSurveyWidget from '../../Surveys/TripSurveyWidget'
import april2023OpenTripSurveyJson from './surveys/april2023OpenTripSurveyJson'
import march2023OpenTripSurveyJson from './surveys/march2023OpenTripSurveyJson'
import newYears2022SurveyJson from './surveys/newYears2022SurveyJson'
//End Surveys

import joinUsPic from '../../img/AboutUs/JoinOurTrip.jpeg'

function Body() {
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
        </Row>
      </Container>
    </>
  )
}

export default Body
