import { React, useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import CardGroup from 'react-bootstrap/CardGroup'

import SponsorKidsObj from './SponsorKidsObj'

function GroupCards() {
  const [playerData, setPlayerData] = useState([])
  useEffect(() => {
    // setPlayerData(SponsorKidsObj.slice(0, 15))
    setPlayerData(SponsorKidsObj)
  }, [])

  const renderCard = (data, index) => {
    return (
      <Col>
        <Card key={index} className="card-example overflow-auto">
          <Card.Img
            style={{
              minHeight: '20vw',
              maxHeight: '22vw',
              maxWidth: '20vw',
            }}
            src={data.image}
          />

          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
          </Card.Body>
          <Card.Header>Age: {data.age}</Card.Header>
          {data.interests ? <Card.Header>Interests</Card.Header> : null}
          {data.interests ? (
            <ListGroup className="list-group-flush">
              {data.interests.map((item, i) => (
                <ListGroup.Item key={i}>{item}</ListGroup.Item>
              ))}
            </ListGroup>
          ) : null}
          <Card.Text
            style={{ paddingTop: '0.5vw' }}
            givebutter-element-id={data.link}
          >
            ...
          </Card.Text>
        </Card>
      </Col>
    )
  }

  return (
    <Row>
      <div className="glem">{playerData.map(renderCard)}</div>
    </Row>
  )
}

export default GroupCards
