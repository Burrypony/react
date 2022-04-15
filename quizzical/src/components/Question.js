import React, { useEffect } from "react"

export default function Question(props) {
    const question = props.data.isLoaded?props.data.questions.map(el => {
        var answers = el.allAnswer.map(answer =>{
            return (
                <div className="regularAnswer">{answer}</div>
            )
        })
        
        return(
        <div>
            <h1>{el.question}</h1>
            {answers}
        </div>
    )}):''

    return (
        <div>
            {question}
        </div>
    )

}