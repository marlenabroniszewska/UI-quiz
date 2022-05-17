import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors, Text, Title, TextInput, Button } from 'react-native-paper';
import { NextButton } from '../../components/NextButton';
import { LinearGradient } from 'expo-linear-gradient';

function Task4({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <LinearGradient
      colors={['purple', '#b380ff', '#6600ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Task 4</Text>
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
          style={styles.button}
          labelStyle={{
            fontSize: 20,
            color: Colors.white,
          }}
          onPress={() => { }}
        >
          FORGOT PASSWORD?
        </Button>
        <Button
          style={styles.button}
          labelStyle={{
            fontSize: 20,
            color: Colors.white,
          }}
          onPress={() => { }}
        >
          SIGN UP
        </Button>
        <Button
          style={styles.button}
          labelStyle={{
            fontSize: 20,
            color: Colors.white,
          }}
          onPress={() => { }}
        >
          SIGN IN
        </Button>
      </View>
      <NextButton
        onPress={() => navigation.navigate('Question4')}
        text="Go to question"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  button: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    height: 50,
    backgroundColor: Colors.blue500,
  }
});

export default Task4;