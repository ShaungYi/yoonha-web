import './QuestionCard.css'
import { useReducer, useState } from 'react';
import AnswerBox from './AnswerBox';
import StartCard from './StartCard';
import EndCard from './EndCard';
import { useDispatch } from 'react-redux';
import { classUpdateFunctionsSliceActions } from '../store/store';

import unasco from '../answerImages/unasco.png'
import yiFamily from '../answerImages/yoon-yi-family.png'
import yoonHorse from '../answerImages/yoon-horse.png'
import yoonShake from '../answerImages/yoon-shake.png'
import yunbelivable from '../answerImages/yunbelivable.png'

let cardIndex = 0
const questions = [
    {
        text: '윤하의 말은 울때 무슨 소리를 낼까?',
        image: yoonHorse,
        answer: '유니히이이잉'
    },
    {
        text: '우리 가족이 연합하면?',
        image: yiFamily,
        answer: 'Yi Family 유나이티드'
    },
    {
        text: '윤하가 제일 좋아하는 음료는?',
        image: yoonShake,
        answer: '윤쉐이크'
    },
    {
        text: '윤하의 별명은?',
        image: yunbelivable,
        answer: '윤빌리버블 그라운드 쉐이커'
    },
    {
        text: '윤하가 만든 레고 탑이 받은 상은?',
        image: unasco,
        answer: '유나스코 세계윤화유산'
    }
    
]


function QuestionCard(){

    const cardReducer = (state, action) => {
        if (action.state == 'end'){
            return {state:'end', glowClass: 'pulsing-radiance-element'}
        }
        return {state: action.state, glowClass:''}
    }

    const buttonReducer = (state, action) => {
        if (action.class.includes('showAnswerButton')){
            return {
                class: action.class, 
                textClass: 'questionText',
                text:'show'
            }
        }
        //action.class = next
        return {
            class: action.class, 
            textClass: 'answerText',
            text:'next'
        }
    }

    const [cardState, dispatchCard] = useReducer(
        cardReducer,
        {state:'start', glowClass: ''}
    )
    const [questionCardClass, setQuestionCardClass] = useState('darkened')
    const [buttonState, dispatchButton] = useReducer(
        buttonReducer, 
        {class:'showAnswerButton', text:'show'})
    
    const [showAnswer, setShowAnswer] = useState(false)


    function initialize() {
        dispatchCard({state:'start'})
        setQuestionCardClass('darkened')
        dispatchButton({class:'showAnswerButton'})
        setShowAnswer(false)
        cardIndex=0
    }


    const onButtonClicked = () => {
        if (buttonState.class == 'showAnswerButton'){
            dispatchButton({class:'nextCardButton'})
            setShowAnswer(true)

        } else{ //button class = nextCardButton

            setQuestionCardClass('questionCard-transition')
        }
        
    }

    const onStartButtonClicked = () => {
        dispatchCard({state:'question'})
        setQuestionCardClass('')
        
    }

    
    const onQuestionCardTransitionEnd = () => {
        if (questionCardClass == 'questionCard-transition'){ //if transition is from middle of card swap process
            //begin animation
            console.log('transition end')
            setQuestionCardClass('questionCard-transition-end')

            //reset card
            dispatchButton({class:'showAnswerButton'})
            setShowAnswer(false)

            //update index
            if (questions[cardIndex + 1]){
                cardIndex ++
            }
            else {
                cardIndex = 0
                dispatchCard({state:'end'})
            }
        }
    }

    const onQuestionCardAnimationEnd = () => {
        setQuestionCardClass('')
    }


    const [endCardClass, setEndCardClass] = useState('')
    const setEndCardClassCard = (endCardClass) => {
        setEndCardClass(endCardClass)
    }
  
    const dispatch = useDispatch()
    dispatch(classUpdateFunctionsSliceActions.storeFuction({
      funcName: 'setEndCardClassCard',
      func: setEndCardClassCard
    }))

    return (
        <div id='questionCardContainer'>
            <div 
            className={`questionCard ${questionCardClass} ${endCardClass} ${cardState.glowClass}`}
            onTransitionEnd={onQuestionCardTransitionEnd}
            onAnimationEnd={onQuestionCardAnimationEnd}>

                {cardState.state!='end' &&
                <>
                    <p className={buttonState.textClass}>
                    {showAnswer ? questions[cardIndex].answer : questions[cardIndex].text}
                    </p>
                    <AnswerBox showAnswer={showAnswer} image={questions[cardIndex].image}/>
                    <button 
                    className={`theButton ${buttonState.class}`} 
                    onClick={onButtonClicked}>
                        {buttonState.text}
                    </button>
                </>

                }

                {cardState.state=='end' && 
                <EndCard 
                questionCardContainer = {document.getElementById('questionCardContainer')}
                resetGame = {initialize}/>
                }

            </div>

            {cardState.state=='start' && 
                <StartCard onStartButtonClicked={onStartButtonClicked}/>
            }
        </div>
        
    )
}


export default QuestionCard