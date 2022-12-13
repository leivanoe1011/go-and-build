import { Routes, Route } from 'react-router-dom'

// Begin Route Components
import Home from '../Home/Home'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
// End Route Components

function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<Home />} />
        <Route exact path="*" element={<Home />} />
        <Route exact path="/WhatWeDo" element={<WhatWeDo />} />
      </Routes>
    </>
  )
}

export default Router
