import Question from "./Question";

function Question2({ navigation }) {
  return (
    <Question
      questionNumber={2}
      question='What was wrong?'
      option1='Wrong text alignment in articles'
      option2='Article content overflowing screen - results in "scroll in scroll"'
      option3='Title font is not big enough'
      answer={2}
      answerPath="Question2Answer"
      taskPath="Task2"
      navigation={navigation}
    />
  )
}

export default Question2;