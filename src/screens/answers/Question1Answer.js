import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors, TextInput, Text } from 'react-native-paper';
import { NextButton } from '../../components/NextButton';
import { LinearGradient } from 'expo-linear-gradient';
import DatePicker from 'react-native-datepicker';

function Question1Answer({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [date, setDate] = useState('09-10-2021');

  return (
    <LinearGradient
      colors={['purple', '#b380ff', '#6600ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Answer 1</Text>
      <View>
        <TextInput
          theme={{ roundness: 10 }}
          underlineColor={'transparent'}
          activeUnderlineColor={'transparent'}
          outlineColor={'transparent'}
          mode={'outlined'}
          style={styles.textInput}
          label="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <TextInput
          theme={{ roundness: 10 }}
          underlineColor={'transparent'}
          activeUnderlineColor={'transparent'}
          outlineColor={'transparent'}
          mode={'outlined'}
          style={styles.textInput}
          label="Last Name"
          value={secondName}
          onChangeText={text => setSecondName(text)}
        />
        <View style={styles.datePicker}>
          <DatePicker
            placeholder="select date of birth"
            mode='date'
            date={date}
            format="DD/MM/YYYY"
            minDate="01-01-1900"
            maxDate="01-01-2100"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              dateTouchBody: {
                marginLeft: 10,
                minWidth: '220%',
                height: '100%',
                paddingBottom: 15,
              },
              dateInput: {
                borderColor: 'transparent',
                marginTop: 15,
                alignItems: "flex-start",
              },
              placeholderText: {
                fontSize: 17,
                color: "grey"
              },
              dateText: {
                fontSize: 17,
              }
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
        </View>
      </View>
      <NextButton
        onPress={() => navigation.navigate('Task2')}
        text="Go to next task"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f2ff",
    paddingHorizontal: 10,
    paddingVertical: 80
  },
  title: {
    fontSize: 20,
    paddingTop: 20,
    paddingHorizontal: 10,
    textAlign: 'left',
    textTransform: 'uppercase',
    color: Colors.white,
  },
  textInput: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 30,
  },
  dropdown: {
    borderColor: Colors.white,
  },
  datePicker: {
    backgroundColor: Colors.white,
    height: '17%',
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 30,
  },
  date: {
    flex: 1,
    height: '17%',
    width: '200%',
  },
});

export default Question1Answer;