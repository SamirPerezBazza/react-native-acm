import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

/**
 * 
 * @param {string} param0 valor del TextInput
 * @param {function} setValue función que maneja el evento de cambio del TextInput
 * @returns Componente reutilizable
 */
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
