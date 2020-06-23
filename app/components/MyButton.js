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
    width: 200,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 7,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default MyButton;
