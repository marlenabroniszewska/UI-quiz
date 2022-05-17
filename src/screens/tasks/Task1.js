import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors, TextInput, Text } from 'react-native-paper';
import { NextButton } from '../../components/NextButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { LinearGradient } from 'expo-linear-gradient';

function Task1({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState('');
  var items = []
  for (var i = 0; i < 10; i++) {
    var baseDate = new Date()
    baseDate.setDate(baseDate.getDate() - i)
    items.push({ label: baseDate.toISOString().split('T')[0], value: baseDate.toISOString().split('T')[0] })
  }
  return (
    <LinearGradient
      colors={['purple', '#b380ff', '#6600ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Task 1</Text>
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
        <View style={{
          marginVertical: 20,
          marginHorizontal: 30,
        }}>
          <DropDownPicker
            placeholder='Date of Birth'
            style={styles.dropdown}
            dropDownStyle={{
              borderColor: Colors.red100
            }}
            open={showDropDown}
            value={dateOfBirth}
            items={items}
            setOpen={setShowDropDown}
            setValue={setDateOfBirth}
          />
        </View>
      </View>
      <NextButton
        onPress={() => navigation.navigate('Question1')}
        text="Go to question"
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
  }
});

export default Task1;