import React, { useEffect } from "react"

export default function Question(props) {
    const question = props.data.isLoaded?props.data.questions.map(el => {
        var answers = el.allAnswer.map(answer =>{
            return (
                <div className={
                    props.data.checked?el.selectedAnswer===answer?el.selectedAnswer===el.correctAnswer?"correctAnswer":"wrongAnswer":answer===el.correctAnswer?"correctAnswer":'regularAnswer':el.selectedAnswer===answer?'selectedAnswer':'regularAnswer'
                } onClick={()=>{props.setAnswer(answer, el.id)}}>{answer}</div>
            )
        })
        
        return(
        <div className="question">
            <h1>{el.question}</h1>
            <div className="answers">
            {answers}
            </div>
        </div>
    )}):''

    return (
        <div>
            {question}
        </div>
    )

}