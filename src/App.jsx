import { useEffect, useState } from 'react'
import Header from './Components/1-header/Header'
import HeroSection from './Components/2-heroSection/HeroSection'
import Main from './Components/3-main/Main'
import ContactUs from './Components/4-contactUs/ContactUs'
import Footer from './Components/5-footer/Footer'
import Progress from './Components/6-progress/Progress'
import { Routes, Route } from 'react-router-dom'

function App() {
  const[scrol, setScroll] = useState(false)
  
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if (scrollY > 200) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  },[])

  return (
    <div id="up" className='container'>
      <Header />
      <HeroSection />
      <div className='divider' />
      <Progress />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <ContactUs />
      <div className='divider' />
      <Footer />
        <a href='#up' style={{opacity: scrol ? 2 : 0}}>
          <button className='scroll2Top icon-keyboard_arrow_up'></button>
        </a>


    </div>
  )
}

export default App
