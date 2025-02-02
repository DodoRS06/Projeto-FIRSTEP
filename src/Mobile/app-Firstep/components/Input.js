import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      mode="outlined"
      keyboardType="default"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F6E9B4',
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default Input;