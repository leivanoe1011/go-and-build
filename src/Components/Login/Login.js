import { React, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../AuthContext/AuthContext'
import makeToast from '../../Toaster'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import { GoogleLogin } from 'react-google-login'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import goandbuild from '../../media/goNbuildLogo_20220815_1500x1500.jpg'

import './custom.css'

const clientId = process.env.REACT_APP_G_CLIENT_ID

function Login() {
  const [googleApiStyle, setGoogleApiStyle] = useState({})
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const redirectPath = location.state?.path || '/'

  const onSuccess = (res) => {
    auth.login(res)
    navigate(redirectPath, { replace: true })
  }

  const onFailure = (res) => {
    makeToast('error', 'Failed to login')
  }

  useEffect(() => {
    setGoogleApiStyle({ backgroundColor: 'lightblue' })
  }, [])

  const customStyle = { fontSize: '2vw', backgroundColor: '#dc3545' }
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={goandbuild} />
              <Card.Body>
                <Card.Title>Please Login</Card.Title>
                <Card.Text>
                  Use your <strong>Go and Build</strong> user email. This will
                  give us access to make changes to the website
                </Card.Text>

                <GoogleLogin
                  className="google-api"
                  clientId={clientId}
                  buttonText="Login"
                  render={(renderProps) => (
                    <button onClick={renderProps.onClick} style={customStyle}>
                      <FontAwesomeIcon icon={faGoogle} /> Login
                    </button>
                  )}
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  inSignedIn={true}
                  style={{
                    border: 'none',
                    background: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
