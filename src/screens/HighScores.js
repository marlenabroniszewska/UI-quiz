import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';
import { BackButton } from '../components/BackButton';

function HighScores({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('api');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <LinearGradient
      colors={['purple', '#b380ff', '#6600ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <BackButton onPress={() => navigation.navigate('Home')} />
      <ScrollView vertical={true}>
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <ActivityIndicator /> : (
            data.map((item, index) => {
              return (
                <View style={styles.results}>
                  <Avatar.Icon
                    icon={index == 0 || index == 1 || index === 2 ? 'medal' : ''}
                    color={index == 0 ? 'gold' : index == 1 ? 'silver' : index === 2 ? 'brown' : ''}
                    style={{ backgroundColor: 'transparent', paddingBottom: 10 }}
                  ></Avatar.Icon>
                  <Text style={{ fontSize: 25, minWidth: '60%', paddingTop: 5 }}>{item.userName}</Text>
                  <Text style={{ fontSize: 25, paddingTop: 5 }}>{item.score}/5</Text>
                </View>
              )
            })
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  results: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 60,
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: 'flex-start',
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

export default HighScores