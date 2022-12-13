import { Routes, Route } from 'react-router-dom'

// Begin Route Components
import Home from '../Home/Home'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import ContactUs from '../ContactUs/ContactUs'
import OurWork from '../OurWork/OurWork'
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
      </Routes>
    </>
  )
}

export default Router
