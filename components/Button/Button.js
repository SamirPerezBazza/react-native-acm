import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Button = ({ handlePress, Icon, colorIcon = "#FFF", style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={handlePress}
    >
      <Icon color={colorIcon} />
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0c84b4",
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  }
})
