import Question from "./Question";

function Question5({ navigation }) {
  return (
    <Question
      questionNumber={5}
      question='What was wrong?'
      option1='Not enough "Patty" options'
      option2='Negation in checkbox label and wrong "Patty" amount input, unnecesary limiting options'
      option3='Checkbox and radio button are too far from labels'
      answer={2}
      answerPath="Question5Answer"
      taskPath="Task5"
      navigation={navigation}
    />
  )
}

export default Question5;