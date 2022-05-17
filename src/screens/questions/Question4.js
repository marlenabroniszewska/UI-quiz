import Question from "./Question";

function Question4({ navigation }) {
  return (
    <Question
      questionNumber={4}
      question='What was wrong?'
      option1='Font and button colors does not go well'
      option2='Too small buttons, too close to each other'
      option3='Buttons with different functions looks very similar'
      answer={3}
      answerPath="Question4Answer"
      taskPath="Task4"
      navigation={navigation}
    />
  )
}

export default Question4;