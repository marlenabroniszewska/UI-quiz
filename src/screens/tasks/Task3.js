import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors, Text, TextInput, Button, Title } from 'react-native-paper';
import { NextButton } from '../../components/NextButton';
import { LinearGradient } from 'expo-linear-gradient';

function Task3({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState(0)

  return (
    <LinearGradient
      colors={['purple', '#b380ff', '#6600ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Task 3</Text>
      <View>
        <Title style={styles.phonenumberTitle}>Enter your phone number</Title>
        <TextInput
          value={formatAsPhoneNumber(phoneNumber)}
          editable={false}
          style={styles.phoneNumber}
          underlineColor={'transparent'}
          activeUnderlineColor={'transparent'}
          outlineColor={'transparent'}
          mode={'outlined'}
        >
        </TextInput>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Button
            style={styles.buttonPlus}
            onPress={() => setPhoneNumber(phoneNumber + 1)}
            mode='contained'
            color='purple'
            labelStyle={{
              fontSize: 50,
              color: Colors.white,
            }}
          >
            +
          </Button>
          <Button
            style={styles.buttonReset}
            onPress={() => setPhoneNumber(0)}
            mode='text'
            labelStyle={{
              fontSize: 20,
              color: Colors.white,
            }}
          >
            Reset
          </Button>
        </View>
      </View>
      <NextButton
        onPress={() => navigation.navigate('Question3')}
        text="Go to question"
      />
    </LinearGradient>
  );
}

function formatAsPhoneNumber(phoneNumber) {
  let phoneNumberString = phoneNumber.toString()

  let s = "000000000" + phoneNumberString;
  let phoneNumberWithZeros = s.substring(s.length - 9);

  return `+48 ${phoneNumberWithZeros.slice(0, 3)}-${phoneNumberWithZeros.slice(3, 6)}-${phoneNumberWithZeros.slice(6)}`
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
  phonenumberTitle: {
    fontSize: 20,
    paddingTop: 20,
    paddingHorizontal: 10,
    color: Colors.white,
  },
  phoneNumber: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonPlus: {
    marginTop: 20,
  },
  buttonReset: {
    marginTop: 45,
  },
});

export default Task3;