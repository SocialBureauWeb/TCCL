import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChannelTables } from './pages/ChannelPackage'

import { NetworkPage } from './pages/NetworkPage'
import { CPESchemes } from './pages/CpeScheme'
import { AboutUs } from './Aboutus'
import BroadcastersDashboard from './components/BroadCaster'
import { Declare } from './pages/Declare'

function  App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/declaration' element={<Declare/>} />
      <Route path='/channelPackage' element={<ChannelTables/>} />
      <Route path='/network' element={<NetworkPage/>} />
      <Route path='/cpeScheme'element={<CPESchemes/>}/>
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/broadcast' element={<BroadcastersDashboard/>} />
      
      </Routes>
      </BrowserRouter>
  )
}

export default App