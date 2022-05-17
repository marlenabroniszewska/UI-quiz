import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Colors, Text, Title, Button, Chip } from 'react-native-paper';
import { NextButton } from '../../components/NextButton';
import { LinearGradient } from 'expo-linear-gradient';

function Question5Answer({ navigation }) {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)
  const [checked6, setChecked6] = useState(false)
  const [value, setValue] = React.useState(0);
  const vegies = ['Lettuce', 'Tomato', 'Onions', 'Mayo', 'Cheese', 'Jalapeno']
  const checked = [checked1, checked2, checked3, checked4, checked5, checked6]
  const setChecked = [setChecked1, setChecked2, setChecked3, setChecked4, setChecked5, setChecked6]
  return (
    <LinearGradient
      colors={['white', 'white']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Answer 5</Text>
      <ScrollView style={{ height: 800 }}>
        <View>
          <View style={styles.view}>
            <Image style={styles.image} source={require('../../assets/burger.png')} />
          </View>
          <Title style={styles.ingredients}>Vegies</Title>
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 10
          }}>
            {vegies.map((item, index) => {
              return (
                <Chip
                  key={index}
                  icon={checked[index] ? 'check-circle' : 'checkbox-blank-circle-outline'}
                  selected={checked[index]}
                  onPress={() => setChecked[index](!checked[index])}
                  textStyle={styles.chipText}
                  style={styles.chip}
                >
                  {item}
                </Chip>
              )
            })}
          </View>
          <View>
            <Title style={styles.ingredients}>Patty</Title>
            <View style={{ flexDirection: "row", justifyContent: 'flex-start', marginLeft: 10 }}>
              <Text style={{ fontSize: 15, marginTop: 10, width: 200 }}>Patty +${value}.00</Text>
              <Button
                style={styles.button}
                onPress={() => value > 0 ? setValue(value - 1) : setValue(value)}
                mode='contained'
                color='#48d1cc'
                labelStyle={{
                  fontSize: 25,
                  color: Colors.white,
                }}
              >-</Button>
              <Text style={styles.pattyValue}>{value}</Text>
              <Button
                style={styles.button}
                onPress={() => setValue(value + 1)}
                mode='contained'
                color='#48d1cc'
                labelStyle={{
                  fontSize: 25,
                  color: Colors.white,
                }}
              >+</Button>
            </View>
          </View>
        </View>
      </ScrollView>
      <NextButton
        onPress={() => navigation.navigate('Finish')}
        text="Finish"
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
  patty: {
    marginRight: 3
  },
  pattyValue: {
    fontSize: 18,
    marginTop: 15,
    marginHorizontal: 10
  },
  button: {
    borderRadius: 35
  },
  chip: {
    marginHorizontal: 10,
    marginBottom: 5
  },
  chipText: {
    fontSize: 15
  }
});

export default Question5Answer;