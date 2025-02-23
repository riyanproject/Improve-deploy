import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../TitleCards/TitleCards'
import Footer from '../Footer/Footer'
import TitleCards1 from '../TitleCards/TitleCards1'
import TitleCards2 from '../TitleCards/TitleCards2'
import TitleCards3 from '../TitleCards/TitleCards3'
import TitleCards4 from '../TitleCards/TitleCards4'
import Playlist from '../Playlist/Playlist'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
      <img src={hero_banner} alt="" className='banner-img'/>

    </div>
    <div className="hero-caption"></div>
    <div className="hero-btns">


        </div>

        <div className='more-cards'>
        <TitleCards title="For You"/>
        <TitleCards1 title="Motivation"/>
        <TitleCards2 title="Seek knowledge"/>
        <TitleCards3 title="Self care"/>
        <TitleCards4 title="Faith"/>
        <Playlist></Playlist>
        </div>

        <Footer/>
    </div>
    
  )
}

export default Home