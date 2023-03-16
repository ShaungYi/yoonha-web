import Fireworks from '@fireworks-js/react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'
import './EndCard.css'


function EndCard(props){

    const [fireworksTrigger, setFireworksTrigger] = useState(false)
    const [setEndCardClassApp, setEndCardClassCard] = 
        useSelector((state) => 
            [state.classUpdateFunctions.setEndCardClassApp, state.classUpdateFunctions.setEndCardClassCard])

    const [buttonClass ,setButtonClass] = useState('invisible')

    useEffect(() => {
        setEndCardClassCard('questionCard-endCard')

        setTimeout(()=>{
            setEndCardClassApp('app-endCard')
            setButtonClass('')
        }, 1000)

        setTimeout(()=>{
            setFireworksTrigger(true)
        }, 2000)
    })

    const onReplayButtonClicked = () =>{
        window.location.reload()
    }

    return (

        <>  
            {createPortal(
                <div className='playAgainButtonContainer'>
                    <button 
                    className={`theButton playAgainButton pulsing-glow-element ${buttonClass}`}
                    onClick={onReplayButtonClicked}>
                        play again <span className='arrow'/>
                    </button>
                </div>,

                document.getElementById('root'))}

            {fireworksTrigger && createPortal(
                  <Fireworks
                    options={{
                      rocketsPoint: {
                        min: 0,
                        max: 100
                      },
                      delay: {
                        min: 10,
                        max: 15
                      },
                      sound: {
                        enabled: true,
                        files: [
                            'https://fireworks.js.org/sounds/explosion0.mp3',
                            'https://fireworks.js.org/sounds/explosion1.mp3',
                            'https://fireworks.js.org/sounds/explosion2.mp3'
                        ],
                        volume: {
                            min: 4,
                            max: 8
                        }
                      },
                      particles: 100
                    }}
                    style={{
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      position: 'fixed',
                      background: 'transparent'
                    }}
                  />
                ,

                document.getElementById('root'))}

            <p className='celebration-message'>
                윤쉐이
            </p>
            <p className='celebration-message'>
                생일축하해
            </p>
        </>
    )
}


export default EndCard