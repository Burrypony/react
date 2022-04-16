import React, { useEffect, useRef } from "react"
import Question from "./Question"

export default function SecondPage() {
    const [questions, setQuestions] = React.useState({
        error: null,
        isLoaded: false,
        questions: [],
        checked: false
    })
    const [counterCorrectAnswers, setCounterCorrectAnswers] = React.useState(0)

    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            setData()
        }
    }, [])

    useEffect(() => {
        if (questions.checked) {
            setCounterCorrectAnswers(() => {
                return countCorrectAnswers()
            })
        }
    }, [questions])

    function countCorrectAnswers() {
        const allQuestions = questions.questions
        var counter = 0
        for (var i = 0; i < allQuestions.length; i++) {
            if(allQuestions[i].correctAnswer === allQuestions[i].selectedAnswer){
                counter++
            }
        }
        return counter
    }

    function setData() {
        fetch("https://opentdb.com/api.php?amount=5&category=25&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(
                result => {
                    setQuestions(prevQuestions => {
                        const correctQuestionFormat = result.results.map((question, index) => {
                            const allAnswers = [...question.incorrect_answers, question.correct_answer]
                            const shufledAnswers = allAnswers.map(value => ({ value, sort: Math.random() }))
                                .sort((a, b) => a.sort - b.sort)
                                .map(({ value }) => value)
                            return {
                                id: index,
                                question: question.question.replace(/&quot;/g, '\"').replace(/&#039;/g, '\''),
                                allAnswer: shufledAnswers,
                                correctAnswer: question.correct_answer,
                                selectedAnswer: ''
                            }
                        })
                        console.log()
                        return {
                            ...prevQuestions,
                            isLoaded: true,
                            questions: correctQuestionFormat,
                            checked: false
                        }
                    })
                },
                error => {
                    setQuestions(prevQuestions => {
                        return {
                            ...prevQuestions,
                            error: error
                        }
                    })
                })
    }



    function setAnswer(name, id) {
        setQuestions(prevQuestions => {
            const updatedQuestions = prevQuestions.questions.map(question => {
                if (question.id === id) {
                    return {
                        ...question,
                        selectedAnswer: name
                    }
                } else {
                    return question
                }
            })
            return {
                ...prevQuestions,
                questions: updatedQuestions
            }
        })
    }

    function checkAnswers() {
        setQuestions(prevQuestions => {
            return {
                ...prevQuestions,
                checked: true
            }
        })
    }

    function restart() {
        setData()
    }


    return (
        <div>
            <Question data={questions} setAnswer={setAnswer} />
            <button className="checkAnswerBtn" onClick={questions.checked ? restart : checkAnswers}>{questions.checked ? "Play Again" : "Check answers"}</button>
            <h2 className={questions.checked?'displayFlex':'displayNone'} style={{justifyContent:"center"}}>{"You scored "+counterCorrectAnswers+"/"+questions.questions.length +" correct answers"}</h2>
        </div>

    )

}