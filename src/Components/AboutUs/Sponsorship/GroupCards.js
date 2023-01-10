import { React, useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import SponsorKidsObj from './SponsorKidsObj'

function GroupCards() {
  const [playerData, setPlayerData] = useState([])
  useEffect(() => {
    // setPlayerData(SponsorKidsObj.slice(0, 15))
    setPlayerData(SponsorKidsObj)
  }, [])

  const RenderNewKey = (index, key) => {
    return index + 1 * key
  }

  const RenderInterestList = (data) => {
    return (
      <>
        <Card.Header>Interests</Card.Header>
        <ListGroup>
          {data.interests.map((item, i) => (
            <ListGroup.Item key={i}>{item}</ListGroup.Item>
          ))}
        </ListGroup>
      </>
    )
  }

  return (
    <Row xs={1} sm={1} md={2} lg={3}>
      {playerData.map((data, k) => (
        <Col style={{ paddingTop: '2vw' }}>
          <Card key={k} style={{ minWidth: '75%' }}>
            <Card.Img
              className="mx-auto d-block"
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
            {data.interests ? RenderInterestList(data) : null}
            <Card.Text
              style={{ width: '5vw', height: '2vw' }}
              givebutter-element-id={data.link}
            ></Card.Text>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default GroupCards
