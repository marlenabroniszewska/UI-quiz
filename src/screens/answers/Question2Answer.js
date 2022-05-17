import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Paragraph, Text, Title } from 'react-native-paper';
import { NextButton } from '../../components/NextButton';
import { LinearGradient } from 'expo-linear-gradient';

function Question2Answer({ navigation }) {
  return (
    <LinearGradient
      colors={['white', 'white']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Answer 2</Text>
      <ScrollView vertical={true} style={{ height: 800 }}>
        <View style={styles.view}>
          <Card>
            <Title style={{ fontSize: 24 }}>How to make a coffee</Title>
            <Card.Cover style={{ marginVertical: 10 }} source={require('../../assets/coffee.png')} />
            <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
          </Card>
        </View>
        <View style={styles.view}>
          <Card>
            <Title>Step 1</Title>
            <Card.Cover source={require('../../assets/coffee_beans.png')} />
            <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
          </Card>
        </View>
        <View style={styles.view}>
          <Card>
            <Title>Step 2</Title>
            <Card.Cover source={require('../../assets/coffee_grounded.png')} />
            <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
          </Card>
        </View>
        <View style={styles.view}>
          <Card>
            <Title>Step 3</Title>
            <Card.Cover source={require('../../assets/coffee_ready.png')} />
            <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
          </Card>
        </View>
        <View style={{ height: 80 }}></View>
      </ScrollView>
      <NextButton
        onPress={() => navigation.navigate('Task3')}
        text="Go to next task"
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
    marginVertical: 15,
  },
});

export default Question2Answer;