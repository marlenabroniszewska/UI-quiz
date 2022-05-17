import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Colors } from 'react-native-paper';

export class BackButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          icon="arrow-left"
          onPress={this.props.onPress}
          mode="text"
          labelStyle={{
            fontSize: 40,
            color: this.props.color ?? Colors.white
          }}
        >
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    left: 0,
    top: 0,
    flex: 1,
    alignSelf: "flex-start",
    position: "absolute",
    marginTop: 30,
  },
});
