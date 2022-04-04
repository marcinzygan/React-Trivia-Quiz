import React from "react"
import StartScreen from "./StartScreen"
import { Route , Routes} from "react-router-dom"
import Questions from "./Questions"


export default function App(){


  return(
    
      <div>
        <Routes>
          <Route path="/start" element={<StartScreen/>}/>
          <Route path="/questions" element={<Questions/>}/>
        </Routes>
        
      </div>
   
  )
}