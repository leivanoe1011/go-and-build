import { React, useState, useEffect } from 'react'

// Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons'
// Font-awesome

// Firebase
import { rt_db as db } from '../../firebase-config'
import { update, onValue, ref } from 'firebase/database'
// Firebase

// Begin Bootstrap
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
// End Bootstrap

function EditGroupCards() {
  const [kids, setKids] = useState([])

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

  const handleEnableKid = async (data, key) => {
    let enable = data.enabled === 1 ? 0 : 1
    data.enabled = enable

    const updates = {}
    updates[`/kids/${key}`] = data

    return await update(ref(db), updates)
  }

  const handleSponsoredKid = async (data, key) => {
    let sponsored = data.sponsored === 1 ? 0 : 1
    data.sponsored = sponsored

    const updates = {}
    updates[`/kids/${key}`] = data

    return await update(ref(db), updates)
  }

  useEffect(() => {
    const getAllKids = () => {
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val()
        setKids([])
        if (data !== null) {
          setKids(data.kids)
        }
      })
    }

    const onPageLoad = () => {
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

  return (
    <Row xs={1} sm={1} md={2} lg={3}>
      {kids.map((data, k) => (
        <Col key={k} style={{ paddingTop: '2vw' }}>
          <Card key={k} style={{ minWidth: '75%' }}>
            <Container className="p-2">
              <Row>
                {data.enabled === 1 ? (
                  <Col>
                    <Button
                      variant="light"
                      style={{ backgroundColor: ' #FF7276' }}
                      onClick={() => handleEnableKid(data, k)}
                    >
                      <FontAwesomeIcon icon={faSquareMinus} />
                    </Button>
                  </Col>
                ) : (
                  <Col>
                    <Button
                      variant="light"
                      style={{ background: 'rgba(76, 175, 80, 0.3)' }}
                      onClick={() => handleEnableKid(data, k)}
                    >
                      <FontAwesomeIcon icon={faSquarePlus} />
                    </Button>
                  </Col>
                )}

                {data.sponsored === 1 ? (
                  <Col>
                    <Button
                      variant="light"
                      style={{ backgroundColor: ' #FF7276' }}
                      onClick={() => handleSponsoredKid(data, k)}
                    >
                      Sponsored
                    </Button>
                  </Col>
                ) : (
                  <Col>
                    <Button
                      variant="light"
                      style={{ background: 'rgba(76, 175, 80, 0.3)' }}
                      onClick={() => handleSponsoredKid(data, k)}
                    >
                      Not Sponsored
                    </Button>
                  </Col>
                )}
              </Row>
            </Container>
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
          </Card>
          <div>
            <span givebutter-element-id={data.link}></span>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default EditGroupCards
