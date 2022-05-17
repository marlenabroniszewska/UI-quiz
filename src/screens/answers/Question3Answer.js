import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors, Text, TextInput, Title } from 'react-native-paper';
import { NextButton } from '../../components/NextButton';
import { LinearGradient } from 'expo-linear-gradient';

function Question3Answer({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("")

  return (
    <LinearGradient
      colors={['purple', '#b380ff', '#6600ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Answer 3</Text>
      <View>
        <Title style={styles.phonenumberTitle}>Phone number</Title>
        <TextInput
          style={styles.phoneNumber}
          keyboardType='numeric'
          onChangeText={(text) => setPhoneNumber(text.replace("-", ""))}
          value={formatAsPhoneNumber(phoneNumber)}
          maxLength={11}
        />
      </View>
      <NextButton
        onPress={() => navigation.navigate('Task4')}
        text="Go to next task"
      />
    </LinearGradient>
  );
}

function formatAsPhoneNumber(dirtyPhoneNumber) {
  let phoneNumberString = dirtyPhoneNumber.replace("-", "")
  let result = phoneNumberString

  if (phoneNumberString.length > 3) {
    result = `${phoneNumberString.slice(0, 3)}-${phoneNumberString.slice(3)}`
  }
  if (phoneNumberString.length > 5) {
    result = `${phoneNumberString.slice(0, 3)}-${phoneNumberString.slice(3, 5)}-${phoneNumberString.slice(5)}`
  }
  if (phoneNumberString.length > 7) {
    result = `${phoneNumberString.slice(0, 3)}-${phoneNumberString.slice(3, 6)}-${phoneNumberString.slice(6)}`
  }
  return result
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
    marginRight: 5
  },
  buttonReset: {
    marginTop: 45,
  },
});

export default Question3Answer;