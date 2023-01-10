import { Routes, Route } from 'react-router-dom'

// Begin Route Components
import Home from '../Home/Home'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import ContactUs from '../ContactUs/ContactUs'
import OurWork from '../OurWork/OurWork'
import AboutUs from '../AboutUs/AboutUs'
import JoinUs from '../AboutUs/JoinUs/JoinUs'
import Founders from '../AboutUs/Founders/Founders'
import Sponsorship from '../AboutUs/Sponsorship/Sponsorship'
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
      </Routes>
    </>
  )
}

export default RouterComponent
