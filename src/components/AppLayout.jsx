import Navbar from './layout/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './layout/Footer'
import { ReactLenis } from 'lenis/react'
import { cancelFrame, frame } from 'framer-motion'
import { useEffect, useRef } from 'react'
import ScrollToTop from './ScrollToTop'

const AppLayout = () => {
     const lenisRef = useRef(null)
  

  useEffect(() => {
    function update(data) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)
    return () => cancelFrame(update)
  }, [])
  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <ScrollToTop/>
        <Navbar/>
        <Outlet/>
        <Footer/>
     </ReactLenis>
  )
}

export default AppLayout