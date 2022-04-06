import React from "react"
import AnswerButton from "./AnswerButton"
import { nanoid } from 'nanoid'
export default function Questions(){


//Api call and set state for questions
    const [questionsData , setQuestionsData] = React.useState([])

    const [formData ,setFormData] = React.useState({
        checkedAnswer:"",
      
       

    })

console.log(formData)

function handleSubmit(e){
    e.preventDefault()
}
function handeFormChange(event){
    const {name, value, type, checked} = event.target
    
    setFormData(prevFormData =>{
       ;
        return{
            ...prevFormData,
            
            checkedAnswer: [value],
            [name]: type === "checkbox" ? checked : value
        }
    }
        )
}
    React.useEffect(()=> {
        fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data=> setQuestionsData(data.results))
        
    }, [])

   



   const questions =  questionsData.map(data => {
    
    
    const correctAnswer = data.correct_answer
    const incorrectAnswer = data.incorrect_answers
    //Join correct answers with incorrect answers to make allAnswers array and sort it randomly.
    const allAnswers = incorrectAnswer.concat(correctAnswer).sort()
    console.log(correctAnswer)
    const answerButton =  allAnswers.map(answer => {
       return(
           <AnswerButton
           id={nanoid()}
            key={nanoid()}
            answer={answer}
            onChange={handeFormChange}
            checked={formData.value}
           />
        )
    });

    return(
   <div className="question__container"
        key={nanoid()}
   >
    <h1 
        className="question">
            {(data.question).replaceAll("&quot;" , `"`)
            .replaceAll("&#039;" , "'")
            .replaceAll("&eacute;" , "é")
            .replaceAll("&amp;" , "&")}
    </h1>
        {answerButton}
   </div>
    )
    
})

    return(
        <form className="form"
        onSubmit={handleSubmit}>
        {questions}
        <button className="btn checkAnswers__btn">Check answers</button>
      </form>
    )



}