import { React, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../AuthContext/AuthContext'
import makeToast from '../../Toaster'

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
    console.log('Login Success' + res)
    auth.logout()
    navigate(redirectPath, { replace: true })
  }

  useEffect(() => {
    console.log('in logout use effect')
  })
  return (
    <>
      <Container>
        <Row>
          <Col>In logout</Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <div id="signInButton">
            <GoogleLogout
              clientId={clientId}
              buttonText="Logout"
              onLogoutSuccess={onSuccess}
            />
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Logout
