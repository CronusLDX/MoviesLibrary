import {React} from 'react'

import { Outlet } from 'react-router-dom'



import { Container } from './Home-Styles'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomeContent from './components/HomeContent/HomeContent'

const Home = () => {
  
      return (
   <Container>
      <Outlet/>
      <Navbar />
      <HomeContent />
      <Footer />
   </Container>
  )
}

export default Home
