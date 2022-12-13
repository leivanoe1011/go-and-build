// Dependencies
import React from 'react'
import WOW from 'wowjs'
import { ToastContainer } from 'react-toastify'
import Container from 'react-bootstrap/Container'

// Components
import NavBar from './Components/NavBar/NavBar'
import MainBody from './Components/MainBody/MainBody'
import Footer from './Components/Footer/Footer'
import Routes from './Components/Routes/Routes'
// import history from './Components/History/History'

// css
import './styles/app.css'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // Same as component diMount
  React.useEffect(() => {
    // Runs after the first render() lifecycle
    new WOW.WOW().init()
  }, [])

  return (
    <>
      <ToastContainer />

      {/* The Link components in the NavBar must live within the Router component */}

      {/* Start of NavBar */}
      <Container style={{ paddingBottom: '5rem' }}>
        <NavBar />
      </Container>
      {/* End of NavBar */}

      <Container fluid style={{ paddingTop: '4rem' }}>
        <Routes>
          <MainBody>{/* <Routes history={history} /> */}</MainBody>
        </Routes>
      </Container>

      {/* Footer */}
      <Container fluid fixed="bottom" style={{ paddingTop: '5rem' }}>
        <Footer />
      </Container>
      {/* End of Container */}
    </>
  )
}

export default App
