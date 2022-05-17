import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors, Avatar } from 'react-native-paper';
import { NextButton } from '../components/NextButton';

function Finish({ navigation }) {
  let result = 0
  global.result.map((item) => {
    result = item == 1 ? result + 1 : result
  })
  const sendResult = async () => {
    try {
      const body = JSON.stringify({
        userName: global.name,
        score: result
      })
      const response = await fetch('api',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        });
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  useEffect(() => {
    sendResult();
  }, []);

  return (
    <LinearGradient
      colors={['purple', '#b380ff', '#6600ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <View style={{ marginTop: 30 }}></View>
      <Text style={styles.congrats}>Congratulations {global.name}!</Text>
      <Text style={styles.congrats}>You finished the quiz!</Text>
      <View style={styles.view}>
        <Text style={styles.score}>Your score</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
          {global.result.map((item, index) => {
            return (
              <View style={styles.singleResult}>
                <Avatar.Icon
                  icon={item == 1 ? 'check-circle' : 'close-circle'}
                  color={item == 1 ? 'green' : 'red'}
                  style={{ backgroundColor: 'transparent' }}
                >
                </Avatar.Icon>
                <Text style={{ marginLeft: 25, fontSize: 25 }}>{index}</Text>
              </View>
            )
          })}
        </View>
        <Text style={styles.result}>{result}/5</Text>
      </View>
      <NextButton
        onPress={() => navigation.navigate('Home')}
        text="Go to home page"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  view: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: '40%',
    paddingVertical: 50,
    paddingHorizontal: 5,
    justifyContent: 'center',
    marginTop: 30
  },
  score: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingBottom: 10,
  },
  singleResult: {
    borderColor: Colors.purple400,
    borderWidth: 1,
    borderRadius: 25,
    margin: 3
  },
  congrats: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Finish;