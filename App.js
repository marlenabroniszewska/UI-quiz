import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HighScores from './src/screens/HighScores';
import Task1 from './src/screens/tasks/Task1';
import Task2 from './src/screens/tasks/Task2';
import Task3 from './src/screens/tasks/Task3';
import Task4 from './src/screens/tasks/Task4';
import Task5 from './src/screens/tasks/Task5';
import Question1 from './src/screens/questions/Question1';
import Question2 from './src/screens/questions/Question2';
import Question3 from './src/screens/questions/Question3';
import Question4 from './src/screens/questions/Question4';
import Question5 from './src/screens/questions/Question5';
import Question1Answer from './src/screens/answers/Question1Answer';
import Question2Answer from './src/screens/answers/Question2Answer';
import Question3Answer from './src/screens/answers/Question3Answer';
import Question4Answer from './src/screens/answers/Question4Answer';
import Question5Answer from './src/screens/answers/Question5Answer';
import Finish from './src/screens/Finish';

const Stack = createNativeStackNavigator()
global.result = []

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={options("Home")}
        />
        <Stack.Screen
          name="HighScores"
          component={HighScores}
          options={options("HighScores")}
        />
        <Stack.Screen
          name="Finish"
          component={Finish}
          options={options("Finish")}
        />
        <Stack.Screen
          name="Task1"
          component={Task1}
          options={options("Task1")}
        />
        <Stack.Screen
          name="Task2"
          component={Task2}
          options={options("Task2")}
        />
        <Stack.Screen
          name="Task3"
          component={Task3}
          options={options("Task3")}
        />
        <Stack.Screen
          name="Task4"
          component={Task4}
          options={options("Task4")}
        />
        <Stack.Screen
          name="Task5"
          component={Task5}
          options={options("Task5")}
        />
        <Stack.Screen
          name="Question1"
          component={Question1}
          options={options("Question1")}
        />
        <Stack.Screen
          name="Question2"
          component={Question2}
          options={options("Question2")}
        />
        <Stack.Screen
          name="Question3"
          component={Question3}
          options={options("Question3")}
        />
        <Stack.Screen
          name="Question4"
          component={Question4}
          options={options("Question4")}
        />
        <Stack.Screen
          name="Question5"
          component={Question5}
          options={options("Question5")}
        />
        <Stack.Screen
          name="Question1Answer"
          component={Question1Answer}
          options={options("Question1Answer")}
        />
        <Stack.Screen
          name="Question2Answer"
          component={Question2Answer}
          options={options("Question2Answer")}
        />
        <Stack.Screen
          name="Question3Answer"
          component={Question3Answer}
          options={options("Question3Answer")}
        />
        <Stack.Screen
          name="Question4Answer"
          component={Question4Answer}
          options={options("Question4Answer")}
        />
        <Stack.Screen
          name="Question5Answer"
          component={Question5Answer}
          options={options("Question5Answer")}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const options = () => {
  return {
    headerStyle: { backgroundColor: 'transparent' },
    headerShown: false,
    headerBackVisible: false,
    headerTintColor: 'transparent',
    headerShadowVisible: false,
  }
}

