import { React, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../AuthContext/AuthContext'
import makeToast from '../../Toaster'

import { GoogleLogin } from 'react-google-login'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const clientId = process.env.REACT_APP_G_CLIENT_ID

function Login() {
  const [user, setUser] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const redirectPath = location.state?.path || '/'

  const handleLogin = () => {
    auth.login(user)
    navigate(redirectPath, { replace: true })
  }

  const onSuccess = (res) => {
    console.log('Login Success ' + res)
    auth.login(res)
    navigate(redirectPath, { replace: true })
  }

  const onFailure = (res) => {
    console.log('Login Failed' + res)
    makeToast('error', 'Failed to login')
  }

  useEffect(() => {
    console.log(clientId)
  })

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>
              <label>
                Username:{' '}
                <input type="text" onChange={(e) => setUser(e.target.value)} />
              </label>
              <button onClick={handleLogin}></button>
            </div>
          </Col>
        </Row>
        <Row>
          <div id="signInButton">
            <GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              inSignedIn={true}
            />
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Login
