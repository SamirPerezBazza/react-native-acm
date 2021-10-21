import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

/**
 * 
 * @param {function} handlePress función que maneja el evento del TochableOpacity
 * @param {component} Icon Componente de ícono
 * @param {string} colorIcon color en hex
 * @param {object} style objeto con las propiedades de los estilos
 * @returns Componente reutilizable
 */
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
