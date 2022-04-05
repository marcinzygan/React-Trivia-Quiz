import React from "react"

export default function Questions(){


//Api call and set state for questions
    const [questionsData , setQuestionsData] = React.useState([])
    
    React.useEffect(()=> {
        fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data=> setQuestionsData(data.results))
    }, [])
//Join correct answers with incorrect answers to make allAnswers array.
// const [allAnswers , setAllAnswers] =React.useState([])

// React.useEffect(()=> {
//      setAllAnswers(questionsData.map(data =>{
//         const correct_answer = data.correct_answer
//         const incorrect_answers = data.incorrect_answers
//         return (
//             [...incorrect_answers].concat(correct_answer)
            
//         )
       
//     }))
// },[questionsData])

// // console.log(allAnswers)
console.log(questionsData)
// const answers = allAnswers.map(item => {
//     return(
//         item.map(element => {
//             return(
//                 <button>{element}</button>
//             )
//         })
//     )
// })
// console.log(answers)
//Map over data and create component for each question 
//need change the key as it throws error
const questions =  questionsData.map(data => {
   
    const allAnswers = data.incorrect_answers.concat(data.correct_answer).sort(() => Math.random() - 0.5)
   
    const questionButton =  allAnswers.map(answer => {
       return(
           <label className="answer__btn">
                <input 
                    className="answer"
                    type="radio"
                    id="answer"
                />
                {answer 
                    .replaceAll("&quot;" , `"`)
                    .replaceAll("&#039;" , "'")
                    .replaceAll("&eacute;" , "é")
                    .replaceAll("&amp;" , "&")
                    }
              </label>
        )
    });

    return(
   <div className="question__container">
    <h1 key={data.question} 
        className="question">
            {(data.question).replaceAll("&quot;" , `"`)
            .replaceAll("&#039;" , "'")
            .replaceAll("&eacute;" , "é")
            .replaceAll("&amp;" , "&")}
    </h1>
        {questionButton}
   </div>
    )
})

    return(
        <form className="form">
         
        {questions}
        <button className="btn checkAnswers__btn">Check answers</button>
      </form>
    )
}