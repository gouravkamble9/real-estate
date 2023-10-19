import React from 'react'
import './HeroCard.scss'

const HeroCard = ({data,text}) => {
  return (
    <div className='heroCard'>
      <div className='card'>
      {/* <img src={data} alt="cardImage" /> */}
      <div className='content'>
          <span>{text.name1}</span>
          <p>{text.name2}</p>
      </div>
      </div>
    </div>
  )
}

export default HeroCard