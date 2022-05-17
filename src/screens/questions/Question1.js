import Question from "./Question";

function Question1({ navigation }) {
  return (
    <Question
      questionNumber={1}
      question='What was wrong?'
      option1='Picking date from dropdown requires excessive searching'
      option2='Too little space between textboxes'
      option3='Poorly chosen colors'
      answer={1}
      answerPath="Question1Answer"
      taskPath="Task1"
      navigation={navigation}
    />
  )
}

export default Question1;