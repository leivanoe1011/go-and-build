import { React, useRef } from 'react'

// Begin Bootstrap Components
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
// End Bootstrap Components

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons'

import EditGroupCards from './EditGroupCards'

import 'react-toastify/dist/ReactToastify.css'

function EditSponsorship() {
  const form = useRef()

  return (
    <>
      <Container>
        <Row>
          <Col className="text-center m-5">
            <h1
              className=""
              style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
            >
              Here we can edit the kids we will sponsor
            </h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <p>
              The plus sign <FontAwesomeIcon icon={faSquarePlus} /> adds the kid
              to the sponsor kid for clients to view
            </p>

            <p>
              The minus sign <FontAwesomeIcon icon={faSquareMinus} /> removes
              the kid from the sponsor kid page and clients will no longer view
              them
            </p>

            <p>
              The sponsor button will show the kid as being sponsored in the
              page
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ fontSize: '0.65rem' }}>
        <EditGroupCards />
      </Container>
    </>
  )
}

export default EditSponsorship
