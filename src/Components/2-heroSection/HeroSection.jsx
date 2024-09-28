import React from 'react'
import './HeroSection.css'
import Lottie from 'lottie-react'
import webDesignerAnimation from '../../../public/animation/designer.json'
import { motion } from 'framer-motion'
const HeroSection = () => {
  return (
    <section className='hero dflex'>
      <div className='leftSection'> 
        <div className='parent-avatar'> 
          <motion.img 
           initial={{transform: "scale(0)"}}
           animate={{transform: "scale(1)"}}
           transition={{damping: 6, type: "spring", stiffness: 100}}
           src="../../../public/1-modified.png" alt='' className='avatar'/>
          <span className='icon-verified_user' />
        </div>

        <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3}} className='title'> Software Designer</motion.h1>
        <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3}} className='sub-title'>&nbsp;&nbsp;&nbsp;My name is Abdelrahman Ahmed, and I am a passionate web developer with a strong foundation in creating innovative and effective web solutions. I graduated from the Faculty of Arts in 2020, and my journey into web development began in 2019.
        After self-studying web development, I further honed my skills by enrolling in the Information Technology Institute (ITI) intensive camp in 2023. Throughout my career, I have worked on numerous projects, which are showcased in my portfolio.
        </motion.p>

        <div className="all-icones dflex">
        <a href='https://www.linkedin.com/in/abdelrahman-ahmed-abdelgawad-392002198/' target='_blank'> <div className='icon icon-linkedin-square'></div> </a>
        <a href='https://github.com/AbdelrahmanAbdelgawad97?tab=repositories' target='_blank'> <div className='icon icon-github'></div> </a>
        <a href='https://wa.me/01120396633' target='_blank'> <div className='icon icon-whatsapp'></div> </a>
        </div> 

      </div>

      <div className='rightSection animation'>
      <Lottie  style={{width: 500}}  animationData={webDesignerAnimation} />
      </div>
    </section>
  )
}

export default HeroSection
