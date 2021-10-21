import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({ title = "" }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 35,
    width: '60%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#48494B"
  }
})
