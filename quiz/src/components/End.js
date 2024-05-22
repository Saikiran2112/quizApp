import {useContext,useState} from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/Question';
function End(){
    const {score}=useContext(QuizContext);
    return (
        <>
        <h1>You have successfully completed the test!</h1>
        <p>Your Score:{score}</p>
        </>
    )
}
export default End;