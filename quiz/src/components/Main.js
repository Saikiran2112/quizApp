import {useContext} from 'react';
import { QuizContext } from '../Helpers/Context';
import './common.css'
function Main(){
    const {gamestate,setGameState}=useContext(QuizContext);
    const handle=()=>{
        setGameState('quiz')
    }
    return (
        <div className='Menu'>
        <button onClick={handle}>Start Quiz</button>
        </div>
    )
}
export default Main;