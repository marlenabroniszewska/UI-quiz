import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Keyboard, StyleSheet } from 'react-native';
import { Colors, TextInput, Button, IconButton } from 'react-native-paper';

function WelcomeScreen({ navigation }) {
  const [name, setName] = useState('');
  return (
    <LinearGradient
      colors={['purple', '#b380ff', '#6600ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <View>
        <IconButton
          icon='trophy-outline'
          color='white'
          size={40}
          onPress={() => {
            navigation.navigate('HighScores')
          }}
          style={styles.trophy}
        ></IconButton>
        <Text style={styles.text}>ENTER YOUR NAME</Text>
        <TextInput
          theme={{ roundness: 10 }}
          underlineColor={'transparent'}
          activeUnderlineColor={'transparent'}
          outlineColor={'transparent'}
          mode={'outlined'}
          style={styles.textInput}
          placeholder='Name'
          onChangeText={(name) => setName(name)}
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
        />
      </View>
      <View>
        <Button
          onPress={() => {
            global.name = name
            navigation.navigate('Task1')
          }}
          style={styles.startButton}
          contentStyle={{
            height: 50
          }}
          mode={'contained'}
          dark={true}
        >START QUIZ</Button>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  text: {
    marginTop: 100,
    fontSize: 20,
    textAlign: 'center',
    color: Colors.white
  },
  textInput: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 30,
  },
  startButton: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#800080',
  },
  trophy: {
    flex: 1,
    alignSelf: "flex-end",
    position: "absolute",
  },
});

export default WelcomeScreen;