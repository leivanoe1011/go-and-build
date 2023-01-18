import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../AuthContext/AuthContext'

import { GoogleLogout } from 'react-google-login'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const clientId = process.env.REACT_APP_G_CLIENT_ID

function Logout() {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const redirectPath = location.state?.path || '/'

  const onSuccess = (res) => {
    auth.logout()
    navigate(redirectPath, { replace: true })
  }

  return (
    <>
      <Container>
        <Row>
          <Col>Logout Page will reset all login global variables</Col>
          <Col>
            <div id="signInButton">
              <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Logout
