import {useContext,useState} from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/Question';
import End from './End'
function Qui(){
    const [currQue,setCurrQue]=useState(0);
    const {score,setScore}=useContext(QuizContext);
    const [option,setOption]=useState("");
    const nextQuestion=()=>{
        if(option===Questions[currQue].asnwer){
            setScore(score+1);
        }
        setCurrQue(currQue+1);
    }
    {
        if(currQue<Questions.length){
            return (
                <div className='Quiz'>
                <h1>{Questions[currQue].prompt}</h1>
                <div className='options'>
                    <button onClick={()=>{
                        setOption("A")
                    }} >{Questions[currQue].optionA}</button>
                    <button onClick={()=>{
                        setOption("B")
                    }}>{Questions[currQue].optionB}</button>
                    <button onClick={()=>{
                        setOption("C")
                    }}>{Questions[currQue].optionC}</button>
                    <button onClick={()=>{
                        setOption("D")
                    }}>{Questions[currQue].optionD}</button>
                </div>
                <button onClick={nextQuestion}>Next Question</button>
               </div>
            )
        }
        else{
            return <End/>
        }
    
    
}
}
export default Qui;