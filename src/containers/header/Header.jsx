import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Lets's Build Something amazing with GPT3 <br/>
          OpenAI
        </h1>
        <p>Yet bed any for traveling assistance indulgance unpleasing. Not thoughts all excercise blessin. Indulgance way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='rakeshrachapudi04@gmail.com' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1.2M people requested acces a visit in last 24 hours</p>
        </div>    
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
