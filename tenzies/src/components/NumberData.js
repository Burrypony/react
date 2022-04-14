import React, { useEffect } from "react"
import Numbers from './Numbers'


export default function NumberData() {
    const [numbers, setNumbers] = React.useState([])
    const [activeNumber, setActiveNumber] = React.useState()
    const [styleForPopUp, setStyleForPopUp] = React.useState({
        display: "none",
        position: "absolute",
        flexDirection: "column",
        background: "white",
        padding: "50px",
        border: "1px solid black",
        borderRadius: "3.81277px"
    })

    useEffect(() => {
        console.log(activeNumber)
        setNumbers(prevNumbers => {
            const allActiveNumbers = prevNumbers.filter(number => number.active)
            const existActive = allActiveNumbers.length > 0 ? true : false
            console.log('allActiveNumbers', allActiveNumbers)
            const numbersWithActive = prevNumbers.map(el => {
                if (el.id === activeNumber && (!existActive || allActiveNumbers[0].value === prevNumbers[activeNumber].value)) {
                    return { ...el, active: !el.active }
                } else {
                    return el
                }
            })
            console.log('numbersWithActive', numbersWithActive)
            return numbersWithActive
        })
    }, [activeNumber])

    useEffect(() => {
        var data = Array.from({ length: 10 }, () => Math.floor(Math.random() * 5))
        var newArray = data.map((el, index) => {
            let obj = { value: el, active: false, id: index }
            return obj
        })
        setNumbers(newArray)
    }, [])

    useEffect(() =>{
        const activeNumbers = numbers.filter(number => number.active)
        if(activeNumbers.length == 10){
            setStyleForPopUp(prevStyleForPopUp =>{
                return {...prevStyleForPopUp, display:"flex" }
            })
        } 
    }, [numbers])

    function updateNUmbers() {
        setNumbers(prevNumbers => {
            const newNumbers = prevNumbers.map(el => {
                if (!el.active) {
                    return { ...el, value: Math.floor(Math.random() * 5) }
                } else {
                    return el
                }
            })
            return newNumbers
        })
    }
    

    function restart() {
        setNumbers(prevNumbers =>{
            const allNotActiveNumbers = prevNumbers.map(number => {
                return {...number, active: false}
            })
            return allNotActiveNumbers
        })
        setStyleForPopUp(prevStyleForPopUp =>{
            return {...prevStyleForPopUp, display:"none"}
        })
        updateNUmbers()
    }


    return (
        <section className="mainSection">
            < Numbers data={numbers} setActiveNumber={setActiveNumber}></Numbers>
            <button className="rollButton" onClick={updateNUmbers}>Roll</button>
            <div style={styleForPopUp}>
                <h1>Contratulation !</h1>
                <h2>You win !!</h2>
                <button  onClick={restart}>Restart</button>
            </div>
        </section>
    )

}