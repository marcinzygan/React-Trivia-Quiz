import React from "react"

export default function Questions(){

    const [questions , setQuestions] = React.useState([])

    React.useEffect(()=> {
        fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data=> setQuestions(data.results))
    }, [])
  
  
console.log(questions)
    return(
        questions.map(data => {
            return(
           <h1 key={data.incorrect_answers}>{(data.question).replaceAll("&quot;" , `"`)
           .replaceAll("&#039;" , "'")
           .replaceAll("&eacute;" , "é")
           .replaceAll("&amp;" , "&")}</h1>
            )
        })
    )
}