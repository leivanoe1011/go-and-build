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
      <Container className="pb-xs-5 pb-sm-5 pb-lg-1">
        <NavBar />
      </Container>
      {/* End of NavBar */}

      <Container fluid className="pt-xs-5 pt-sm-5 pt-lg-1">
        <Routes>
          <MainBody>{/* <Routes history={history} /> */}</MainBody>
        </Routes>
      </Container>

      {/* Footer */}
      <Footer fixed="bottom" className="pt-xs-5 pt-sm-5 pt-lg-1 " />

      {/* End of Container */}
    </>
  )
}

export default App
