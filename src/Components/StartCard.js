import React from 'react'
import './StartCard.css'

export default function StartCard(props) {
  return (
    <div className='startCard'>
        <button className='theButton startButton pulsing-glow-element' onClick={props.onStartButtonClicked}>
        Start!
        </button>
    </div>
  )
}
