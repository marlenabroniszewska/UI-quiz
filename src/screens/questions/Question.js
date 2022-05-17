import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton, Text, Colors, Button } from 'react-native-paper';
import { BackButton } from "../../components/BackButton";
import { NextButton } from "../../components/NextButton";

function Question(props) {
  const [value, setValue] = useState(0);
  const [answer, setAnswer] = useState(-1);

  const setResult = useMemo(() => {
    global.result[props.questionNumber] = answer

  }, [answer])

  return (
    <LinearGradient
      colors={['purple', '#b380ff', '#6600ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <BackButton onPress={() => props.navigation.navigate(props.taskPath)} />
      <Text style={styles.questionNumber}>Question {props.questionNumber}</Text>
      <View style={styles.question}>
        <Text style={styles.text}>{props.question}</Text>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <RadioButton.Item disabled={answer == -1 ? false : true} label={props.option1} value={1} labelStyle={styles.options} mode='android' color={Colors.black} />
          <RadioButton.Item disabled={answer == -1 ? false : true} label={props.option2} value={2} labelStyle={styles.options} mode='android' color={Colors.black} />
          <RadioButton.Item disabled={answer == -1 ? false : true} label={props.option3} value={3} labelStyle={styles.options} mode='android' color={Colors.black} />
        </RadioButton.Group>
      </View>
      <View style={styles.button}>
        {answer == 1 && <Text style={styles.correctAnswerText}>Answer is correct</Text>}
        {answer == 0 && <Text style={styles.incorrectAswerText}>Answer is incorrect</Text>}
        {answer == -1 && <Button
          onPress={() => { value === props.answer ? setAnswer(1) : setAnswer(0) }}
          mode='outlined'
          labelStyle={{
            fontSize: 20,
            color: Colors.white,
            padding: 15,
          }}
          style={{
            borderWidth: 1,
            borderRadius: 40,
            marginHorizontal: 60,
            marginVertical: 10,
            backgroundColor: Colors.amber600,
          }}
        >
          Check Answer
        </Button>}
      </View>
      {answer != -1 && <NextButton
        onPress={() => props.navigation.navigate(props.answerPath)}
        text="Check correct UI"
      />}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f2ff",
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  question: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 30,
    paddingBottom: 10
  },
  questionNumber: {
    fontSize: 20,
    paddingTop: 20,
    paddingHorizontal: 10,
    textAlign: 'left',
    textTransform: 'uppercase',
    color: Colors.white,
  },
  text: {
    padding: 20,
    fontSize: 20,
    textAlign: 'left',
  },
  options: {
    borderStyle: 'solid',
    borderRadius: 30,
    margin: 10,
  },
  button: {
    marginTop: 20
  },
  correctAnswerText: {
    textAlign: 'center',
    fontSize: 25,
    color: Colors.green900
  },
  incorrectAswerText: {
    textAlign: 'center',
    fontSize: 25,
    color: Colors.red900
  }
});

export default Question;