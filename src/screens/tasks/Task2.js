import React from 'react';
import { View } from 'react-native';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Colors, Text, Divider } from 'react-native-paper';
import { NextButton } from '../../components/NextButton';
import { LinearGradient } from 'expo-linear-gradient';

function Task2({ navigation }) {
  return (
    <LinearGradient
      colors={['white', 'white']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Task 2</Text>
      <ScrollView vertical={true} style={{ height: 800 }}>
        <View style={styles.view}>
          <Text style={styles.articleTitle}>How to make a coffee</Text>
          <ScrollView horizontal={true} >
            <Image style={styles.image} source={require('../../assets/coffee.png')} />
            <View style={styles.article}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
          </ScrollView>
        </View>
        <Divider style={{ height: 2 }} />
        <View style={styles.view}>
          <Text style={styles.articleStepTitle}>Step One</Text>
          <ScrollView horizontal={true} >
            <Image style={styles.image} source={require('../../assets/coffee_beans.png')} />
            <View style={styles.article}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.view}>
          <Text style={styles.articleStepTitle}>Step Two</Text>
          <ScrollView horizontal={true} >
            <Image style={styles.image} source={require('../../assets/coffee_grounded.png')} />
            <View style={styles.article}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.view}>
          <Text style={styles.articleStepTitle}>Step Three</Text>
          <ScrollView horizontal={true} >
            <Image style={styles.image} source={require('../../assets/coffee_ready.png')} />
            <View style={styles.article}>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
          </ScrollView>
        </View>
        <View style={{ height: 80 }}></View>
      </ScrollView>
      <NextButton
        onPress={() => navigation.navigate('Question2')}
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
    height: 200,
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  image: {
    width: 250,
    height: '100%',
    backgroundColor: Colors.blue700,
  },
  article: {
    marginLeft: 10,
    width: 500,
  },
  articleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  articleStepTitle: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  }
});

export default Task2;