import React, { createContext, useState, useEffect, useContext } from 'react'
import makeToast from '../../Toaster'
import { gapi } from 'gapi-script'

const clientId = process.env.REACT_APP_G_CLIENT_ID

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  console.log('in Auth Provider')
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const login = (user) => {
    setUser(user.profileObj)
    setToken(user.accessToken)
    makeToast('success', 'Successfully logged in')
  }
  const logout = () => {
    setUser(null)
    makeToast('success', 'Successfully logged out')
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      })
    }
    gapi.load('client:auth2', start)
  })

  // const accessToken = gapi.auth.getToken().access_token

  return (
    // Children represents all the other components
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
