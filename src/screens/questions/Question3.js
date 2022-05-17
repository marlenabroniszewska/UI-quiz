import Question from "./Question";

function Question3({ navigation }) {
  return (
    <Question
      questionNumber={3}
      question='What was wrong?'
      option1='Telephone number input requires excessive amount of clicks to enter desired number'
      option2='No "-" button'
      option3='Different "+" and "Reset" buttons style'
      answer={1}
      answerPath="Question3Answer"
      taskPath="Task3"
      navigation={navigation}
    />
  )
}

export default Question3;