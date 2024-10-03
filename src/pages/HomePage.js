import React from 'react'
import Hero from '../components/Hero'
import MySkills from '../components/MySkills'
import AboutMe from '../components/AboutMe'
import MyProjects from '../components/MyProjects'
import ContactUs from '../components/ContactUs'

const HomePage = () => {
  return (
    <>
    <Hero />
    <AboutMe />
    <MySkills />
    <MyProjects />
    <ContactUs />
    </>
  )
}

export default HomePage