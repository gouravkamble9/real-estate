import React from 'react'
import "./Hero.scss"
import Navbar from './Navbar/Navbar'
import travelLogo1 from '../../assets/traveloka_logo 2.png'
import travelLogo2 from '../../assets/traveloka_logo 3.png'
import travelLogo3 from '../../assets/traveloka_logo 4.png'
import travelLogo4 from '../../assets/traveloka_logo 5.png'
import loc from '../../assets/fluent_location-16-filled.png'
import heroImage from '../../assets/heroImage.png'
import profile1 from '../../assets/Ellipse 4.png'
import house from '../../assets/Ellipse 5.png'
import HeroCard from '../../utils/heroCard/HeroCard'
import glow from "../../assets/Vector1.png"
import glow1 from '../../assets/Vector2.png'



const Hero = () => {
  return (
    <div className='hero'>
        <img src={glow} alt="glow1" className='glow1'/>
        <img src={glow1} alt="glow2" className='glow2'/>
        <header>
        <Navbar/>
        </header>
        <div className='left'>
            <div className='left__content'>
            <div className='HeroText'>
                <h1>find the place to <br/> live <span>your dreams</span> <br/> easily here</h1>
                <p>Everything you need about finding your place to live will be here, where it will be easier for you</p>
            </div>
            <div className='heroSearch'>
                <div className='searchContent'>
                    <img src={loc} alt="" />
                    <input type="text" placeholder='Search for the location you want!'/>
                    <button>Search</button>
                </div>
            </div>
            <span className='par'>Our Partnership</span>
            <div className='partnership'>
                <img src={travelLogo1} alt="" />
                <img src={travelLogo2} alt="" />
                <img src={travelLogo3} alt="" />
                <img src={travelLogo4} alt="" />
            </div>
        </div>
        </div>
        <div className='right'>
            <img src={heroImage} alt="heroImage" className='heroImage'/>
            <div className='stats'>
            <HeroCard data={profile1} text={{name1:"1K+ People",name2:"Successfully Getting Home"}}/>
            <HeroCard data={house} text={{name1:"56 Houses",name2:"Sold Monthly"}}/>
            </div>
        </div>
    
    </div>
  )
}

export default Hero