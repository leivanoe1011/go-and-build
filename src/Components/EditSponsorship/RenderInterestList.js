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

function RenderInterestList(props) {
  const [cardData, setCardData] = useState(null)

  const [interestsAvailable, setInterestsAvailable] = useState(false)

  const [data, setData] = useState(
    props.cardData.interests != null ? props.cardData.interests : null,
  )

  const cardId = props.id

  const getArrayCount = () => {
    let counter = 0

    if (data != null) {
      data.map((map) => {
        counter++
      })
    }

    if (counter > 0) setInterestsAvailable(true)
    return counter
  }

  const changeListItem = (e, arrayId) => {
    const dataArray = Object.assign([], data)
    dataArray[arrayId] = e.target.value
    setData(dataArray)
  }

  const saveListItem = async (e) => {
    const updates = {}
    const cardObj = Object.assign({}, cardData)
    cardObj.interests = data

    updates[`/sponsorKids/kids/${cardId}`] = cardObj
    return await update(ref(db), updates)
  }

  const newListItem = (e) => {
    const dataList = Object.assign([], data)
    dataList.push('')
    setData(dataList)
  }

  const deleteListItem = (index, e) => {
    const dataList = Object.assign([], data)
    dataList.splice(index, 1)
    setData(dataList)
  }

  useEffect(() => {
    setCardData(props.cardData)
    getArrayCount()
  })

  return (
    <>
      {interestsAvailable ? (
        <>
          <Card.Header>Interests</Card.Header>
          <ListGroup>
            {data.map((item, i) => (
              <ListGroup.Item key={i}>
                {/* {item} */}
                <Container>
                  <Row>
                    <Col xs={8}>
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          changeListItem(e, i)
                        }}
                      />
                    </Col>
                    <Col>
                      <Button
                        onClick={(e) => {
                          deleteListItem(i, e)
                        }}
                        variant="danger"
                      >
                        x
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Container>
            <Row className="d-flex justify-content-end">
              <Col xs={6}>
                <Button
                  style={{ fontSize: '1vw', margin: '0.25vw' }}
                  onClick={newListItem}
                  variant="primary"
                >
                  Add New Interest
                </Button>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Card.Header>
                <Col>
                  <Button onClick={saveListItem} variant="link">
                    Save Changes
                  </Button>
                </Col>
              </Card.Header>
            </Row>
          </Container>{' '}
        </>
      ) : (
        <Container>
          <Row>
            <Col>
              <Button onClick={newListItem} variant="primary">
                Add New Interest
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default RenderInterestList