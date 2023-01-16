import { Routes, Route } from 'react-router-dom'

// Begin Utilities
import RequireAuth from '../RequireAuth/RequireAuth'
// End Utilities

// Begin Route Components
import Home from '../Home/Home'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import ContactUs from '../ContactUs/ContactUs'
import OurWork from '../OurWork/OurWork'
import AboutUs from '../AboutUs/AboutUs'
import JoinUs from '../AboutUs/JoinUs/JoinUs'
import Founders from '../AboutUs/Founders/Founders'
import Sponsorship from '../AboutUs/Sponsorship/Sponsorship'
import EditSponsorship from '../AboutUs/Sponsorship/EditSponsorship'
import Login from '../Login/Login'
import Logout from '../Login/Logout'

// End Route Components

function RouterComponent() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/WhatWeDo" element={<WhatWeDo />} />
        <Route exact path="/OurWork" element={<OurWork />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />

        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/AboutUs/founders" element={<Founders />} />
        <Route exact path="/AboutUs/joinus" element={<JoinUs />} />
        <Route exact path="/AboutUs/sponsorship" element={<Sponsorship />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />

        <Route
          exact
          path="/AboutUs/editSponsorship"
          element={
            <RequireAuth>
              <EditSponsorship />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  )
}

export default RouterComponent
