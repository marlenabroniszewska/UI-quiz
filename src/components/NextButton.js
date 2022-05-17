import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Colors } from 'react-native-paper';

export class NextButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          icon="arrow-right"
          onPress={this.props.onPress}
          mode={this.props.mode ?? "text"}
          color='purple'
          labelStyle={{
            fontSize: 20,
            color: Colors.white,
          }}
        >
          {this.props.text}
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    flex: 1,
    alignSelf: "flex-end",
    position: "absolute",
    marginBottom: 30
  },
});
