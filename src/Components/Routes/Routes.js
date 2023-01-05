import { Routes, Route } from 'react-router-dom'

// Begin Route Components
import Home from '../Home/Home'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import ContactUs from '../ContactUs/ContactUs'
import OurWork from '../OurWork/OurWork'
import AboutUs from '../AboutUs/AboutUs'
import JoinUs from '../JoinUs/JoinUs'
// End Route Components

function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<Home />} />
        <Route exact path="*" element={<Home />} />
        <Route exact path="/WhatWeDo" element={<WhatWeDo />} />
        <Route exact path="/OurWork" element={<OurWork />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />

        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/AboutUs/founders" element={<AboutUs />} />
        <Route exact path="/AboutUs/joinus" element={<JoinUs />} />
        <Route exact path="/AboutUs/sponsorship" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default Router
