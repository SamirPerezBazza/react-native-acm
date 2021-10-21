import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = ({ value, setValue }) => {
  return (
    <TextInput style={styles.input} value={value} onChangeText={setValue} />
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 2,
    outlineWidth: 0
  },
})
