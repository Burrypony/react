import React, {useState, useEffect} from "react";

const Convert = ({language, text}) =>{
    const [translatedText, setTranslatedText] = useState('')
    const [debouncedText,setDebouncedText] = useState(text)

    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            setDebouncedText(text)
        }, 1000)
        
        return (() => {
            clearTimeout(timeoutId)
        })
    }, [text])


    useEffect(()=>{
        const axios = require("axios");

        const encodedParams = new URLSearchParams();
        encodedParams.append("q", debouncedText);
        encodedParams.append("target", language.value);
        encodedParams.append("source", "en");

        const options = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
                'X-RapidAPI-Key': 'd335e5b99fmshbbbc862fb8a3a62p11eb40jsn8729991759df'
            },
            data: encodedParams
        };

        const translate = () => {
            axios.request(options).then(function (response) {
                console.log(response.data);
                setTranslatedText(response.data.data.translations[0].translatedText)
            }).catch(function (error) {
                console.error(error);
            });
        }
        if(debouncedText){
            translate()
        }
        
    }, [language, debouncedText])

    return(
        <h3 className="ui header">{translatedText}</h3>
    )
}

export default Convert