import './index.css';

const CommonChild = props => {
    const {language} = props
    const {question, answer} = language

    return(
        <>
         <li className="question-container">
             <h4 className="question">{question}</h4>
             <p className="answer">{answer}</p>
         </li>
        </>
    )
}
export default CommonChild