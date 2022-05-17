import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Text, RadioButton, Title, Checkbox } from 'react-native-paper';
import { NextButton } from '../../components/NextButton';
import { LinearGradient } from 'expo-linear-gradient';

function Task5({ navigation }) {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)
  const [checked6, setChecked6] = useState(false)
  const [value, setValue] = React.useState(0);
  return (
    <LinearGradient
      colors={['white', 'white']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Task 5</Text>
      <ScrollView style={{ height: 800 }}>
        <View>
          <View style={styles.view}>
            <Image style={styles.image} source={require('../../assets/burger.png')} />
          </View>
          <View>
            <Title style={styles.ingredients}>Vegies</Title>
            <Checkbox.Item label="No Lettuce" status={checked1 ? 'checked' : 'unchecked'} onPress={() => setChecked1(!checked1)} />
            <Checkbox.Item label="No Tomato" status={checked2 ? 'checked' : 'unchecked'} onPress={() => setChecked2(!checked2)} />
            <Checkbox.Item label="No Onions" status={checked3 ? 'checked' : 'unchecked'} onPress={() => setChecked3(!checked3)} />
            <Checkbox.Item label="No Mayo" status={checked4 ? 'checked' : 'unchecked'} onPress={() => setChecked4(!checked4)} />
            <Checkbox.Item label="No Cheese" status={checked5 ? 'checked' : 'unchecked'} onPress={() => setChecked5(!checked5)} />
            <Checkbox.Item label="No Jalapeno" status={checked6 ? 'checked' : 'unchecked'} onPress={() => setChecked6(!checked6)} />
          </View>
          <View>
            <Title style={styles.ingredients}>Patty</Title>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
              <RadioButton.Item label='1 Patty +$1.00' value={1} labelStyle={styles.options} />
              <RadioButton.Item label='2 Patties +$2.00' value={2} labelStyle={styles.options} />
              <RadioButton.Item label='3 Patties +$3.00' value={3} labelStyle={styles.options} />
              <RadioButton.Item label='4 Patties +$4.00' value={4} labelStyle={styles.options} />
            </RadioButton.Group>
          </View>
        </View>
        <View style={{ height: 80 }}></View>
      </ScrollView>
      <NextButton
        onPress={() => navigation.navigate('Question5')}
        text="Go to question"
        mode="contained"
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
  },
  view: {
    height: 100,
    width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  ingredients: {
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 10,
    textTransform: 'uppercase'
  },
});

export default Task5;