import './AnswerBox.css'
import unasco from '../answerImages/unasco.png'

function AnswerBox(props){

    let leftShutterClass = ''
    let rightShutterClass = ''

    if (props.showAnswer){
        leftShutterClass = 'left-shutter-open'
        rightShutterClass = 'right-shutter-open'
    } else{
        leftShutterClass = ''
        rightShutterClass = ''
    }

    return (
        <div className='box'>
            <div className='background'/>

            <img 
            src={props.image}
            className='answerImage'>

            </img>
            
            <div className='shutterContainer'>
                <div className={`shutter left-shutter ${leftShutterClass}`}/>
                <div className={`shutter right-shutter ${rightShutterClass}`}/>
            </div>
        </div>

    )
}


export default AnswerBox