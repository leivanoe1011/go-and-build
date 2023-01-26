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

import RenderInterestList from './RenderInterestList'

function EditGroupCards() {
  const [kids, setKids] = useState([])
  const dbRef = ref(db, '/sponsorKids/')

  const handleEnableKid = async (data, key) => {
    let enable = data.enabled === 1 ? 0 : 1
    data.enabled = enable

    const updates = {}
    updates[`/sponsorKids/kids/${key}`] = data

    return await update(ref(db), updates)
  }

  const handleSponsoredKid = async (data, key) => {
    let sponsored = data.sponsored === 1 ? 0 : 1
    data.sponsored = sponsored

    const updates = {}
    updates[`/sponsorKids/kids/${key}`] = {
      name: 'WAGNER CALET PASCUAL PARACHICO',
      age: 4,
      interests: ['Fire Fighter', 'Futbol'],
      image:
        'https://raw.githubusercontent.com/leivanoe1011/go-n-build/master/src/img/Sponsorship/NuevaEsperanza/WAGNER-CALET-PASCUAL-PARACHICO.jpg',
      link: 'pdVEyL',
      sponsored: 0,
      enabled: 1,
    }

    return await update(ref(db), updates)
  }

  useEffect(() => {
    const getAllKids = () => {
      onValue(dbRef, (snapshot) => {
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
            <Card.Header>
              {' '}
              Sponsor Page: <a href={data.campaign}> {data.name} </a>
            </Card.Header>
            <RenderInterestList id={k} cardData={data} />
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default EditGroupCards
