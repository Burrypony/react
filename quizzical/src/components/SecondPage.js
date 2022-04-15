import React, { useEffect, useRef } from "react"
import Question from "./Question"

export default function SecondPage(){
    const [questions, setQuestions] = React.useState({
        error: null,
        isLoaded: false,
        questions: []
      })

      const initialRender = useRef(true);

      useEffect(()=>{
        if (initialRender.current) {
            initialRender.current = false;
          } else {
            fetch("https://opentdb.com/api.php?amount=5&category=10&type=multiple")
            .then(res=>res.json())
            .then(
                result =>{
                setQuestions(prevQuestions =>{
                    const correctQuestionFormat = result.results.map((question,index)=>{
                        return{
                            id:index,
                            question:question.question,
                            allAnswer:[...question.incorrect_answers,question.correct_answer],
                            correctAnswer:question.correct_answer,
                            selectedAnswer:''
                        }
                    })
                    return{
                        ...prevQuestions,
                        isLoaded:true,
                        questions: correctQuestionFormat
                    }
                })
            },
            error=>{
                setQuestions(prevQuestions =>{
                    return{
                        ...prevQuestions,
                        error: error
                    }
                })
            })
      }},[])


      return(
          <Question data={questions} />
      )

}