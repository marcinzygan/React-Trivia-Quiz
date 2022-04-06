

export default function AnswerButton(props){
   
    return(

        
        <label 
        className="answer__btn"
        >
                <input 
                    className="answer"
                    type="radio"
                    name= "checkedAnswer"
                    value={props.answer}
                    onChange={props.onChange}
                    checked={props.checked }
                    
                />
                {props.answer 
                    .replaceAll("&quot;" , `"`)
                    .replaceAll("&#039;" , "'")
                    .replaceAll("&eacute;" , "é")
                    .replaceAll("&amp;" , "&")
                    }
              </label>
               
    )
}