import './App.scss'
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Header from './pages/header/header'
import Inquiry from './pages/inquiry/inquiry'
import Moreworks from './pages/works/moreworks/Moreworks'
import Services from './pages/services/services'
import Team from './pages/team/team'
import { Link } from 'react-scroll'
import WorksA from './pages/works/worksA'
import WorksB from './pages/works/worksB'
function Home() {
  return (
    <>
      <div className='App wrapper'>
        <Header />
        <WorksA />
        <WorksB />
        <About />
        <Services />
        <Team />
        <Inquiry />
        <Contact />
      </div>
    </>
  )
}
export default Home
