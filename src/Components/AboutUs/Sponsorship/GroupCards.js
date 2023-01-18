import { React, useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'

// Firebase
import { rt_db as db } from '../../../firebase-config'
import { onValue, ref } from 'firebase/database'
// Firebase

function GroupCards() {
  const [kidData, setKidData] = useState([])

  useEffect(() => {
    const getEnabledArray = (obj) => {
      let result = []

      if (obj !== null) {
        obj.map((data) => {
          if (data.enabled === 1) result.push(data)
        })
      }

      return result
    }

    const getAllKids = () => {
      onValue(ref(db), (snapshot) => {
        const data = getEnabledArray(snapshot.val().kids)

        setKidData([])
        if (data !== null) {
          setKidData(data)
        }
      })
    }

    const onPageLoad = () => {
      // setKidData(SponsorKidsObj)
      getAllKids()
    }

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad)
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad)
    }
  }, [])

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
      {kidData.map((data, k) => (
        <Col key={k} style={{ paddingTop: '2vw' }}>
          <Card key={k} style={{ minWidth: '75%' }}>
            <Card.Header className="d-flex justify-content-center">
              {data.sponsored === 1 ? (
                <h6>Sponsored</h6>
              ) : (
                <h6>Not Sponsored</h6>
              )}
            </Card.Header>

            <Card.Img
              className="my-2 mx-auto d-block"
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
          </Card>
          <div>
            <span givebutter-element-id={data.link}></span>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default GroupCards
