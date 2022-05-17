import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors, Text, TextInput, Button, Title } from 'react-native-paper';
import { NextButton } from '../../components/NextButton';
import { LinearGradient } from 'expo-linear-gradient';

function Question4Answer({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <LinearGradient
      colors={['purple', '#b380ff', '#6600ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Answer 4</Text>
      <View>
        <Title style={styles.login}>LOG IN</Title>
        <TextInput
          theme={{ roundness: 10 }}
          underlineColor={'transparent'}
          activeUnderlineColor={'transparent'}
          outlineColor={'transparent'}
          mode={'outlined'}
          style={styles.textInput}
          label="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          theme={{ roundness: 10 }}
          underlineColor={'transparent'}
          activeUnderlineColor={'transparent'}
          outlineColor={'transparent'}
          mode={'outlined'}
          style={styles.textInput}
          label="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <Button
          onPress={() => { }}
          style={styles.buttonSignIn}
          labelStyle={{
            fontSize: 20,
            color: Colors.white,
          }}
        >
          SIGN IN
        </Button>
        <Button
          onPress={() => { }}
          style={styles.buttonSignUp}
          labelStyle={{
            fontSize: 20,
            color: 'purple',
          }}
        >
          SIGN UP
        </Button>
        <Button
          style={styles.buttonForgot}
          onPress={() => { }}
          labelStyle={{
            fontSize: 20,
            color: Colors.white,
            fontStyle: 'italic',
            textTransform: 'none',
            textDecorationLine: 'underline'
          }}
          mode='text'
        >
          Forgot password?
        </Button>
      </View>
      <NextButton
        onPress={() => navigation.navigate('Task5')}
        text="Go to next task"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    paddingHorizontal: 10,
    paddingTop: 80
  },
  title: {
    fontSize: 20,
    paddingTop: 20,
    paddingHorizontal: 10,
    textAlign: 'left',
    textTransform: 'uppercase',
    color: Colors.white,
  },
  login: {
    fontSize: 20,
    paddingTop: 20,
    paddingHorizontal: 10,
    textAlign: 'left',
    textTransform: 'uppercase',
    color: Colors.white,
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 30,
  },
  buttonSignIn: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    height: 50,
    backgroundColor: Colors.blue500,
  },
  buttonSignUp: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    height: 50,
    backgroundColor: Colors.white,
  },
  buttonForgot: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    height: 50,
  }
});

export default Question4Answer;