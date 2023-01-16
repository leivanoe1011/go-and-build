// Dependencies
import React from 'react'
import WOW from 'wowjs'
import { ToastContainer } from 'react-toastify'
import Container from 'react-bootstrap/Container'
import { AuthProvider } from './Components/AuthContext/AuthContext'

// Components
import NavBar from './Components/NavBar/NavBar'
import MainBody from './Components/MainBody/MainBody'
import Footer from './Components/Footer/Footer'
import RouterComponent from './Components/Routes/Routes'
// import history from './Components/History/History'

// css
import 'react-toastify/dist/ReactToastify.css'

function App() {
  // Same as component diMount
  React.useEffect(() => {
    // Runs after the first render() lifecycle
    new WOW.WOW().init()
  }, [])

  return (
    <AuthProvider>
      <ToastContainer />

      {/* The Link components in the NavBar must live within the Router component */}

      {/* Start of NavBar */}
      <Container className="pb-xs-5 pb-sm-5 pb-lg-5">
        <NavBar />
      </Container>
      {/* End of NavBar */}

      <Container fluid className="pt-xs-5 pt-sm-5 pt-lg-5">
        <RouterComponent>
          <MainBody>{/* <Routes history={history} /> */}</MainBody>
        </RouterComponent>
      </Container>

      {/* Footer */}
      <Footer fixed="bottom" className="pt-xs-5 pt-sm-5 pt-lg-1 " />

      {/* End of Container */}
    </AuthProvider>
  )
}

export default App
