import {useState , useEffect} from 'react'
import { SelectedPage } from "./Shared/types"
import Navbar from "@/scences/navbar/Navbar"
import Home from '@/scences/Home/Home'
import Benefits from '@/scences/Benefits/Benefits'
import OurClasses from '@/scences/OurClasses/OurClasses'
import ContactUs from '@/scences/ContactUs/ContactUs'
import Footer from './scences/Footer/Footer'





const App = () => {


  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {

    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll' , handleScroll)
    return () => window.removeEventListener('scroll',handleScroll)
  },[])

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App