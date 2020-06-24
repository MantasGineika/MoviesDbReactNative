import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

function MyButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default MyButton;
