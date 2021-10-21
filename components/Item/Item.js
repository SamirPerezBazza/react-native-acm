import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { BsCheck2 } from "react-icons/bs";

const Item = ({ name, desc }) => {
  const [checked, setChecked] = useState(false)

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={[styles.checkBox, { backgroundColor: !checked ? "#FFF" : "black" }]}
        onPress={() => setChecked(prev => !prev)}
      >
        {
          checked && <BsCheck2 color="#FFF" />
        }
      </TouchableOpacity>
      <View style={styles.dataContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.line} />
        <Text>{desc}</Text>
      </View>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  itemContainer: {
    alignSelf: "center",
    marginVertical: 15,
    flexDirection: "row",
    backgroundColor: "#DEDEDE",
    alignItems: 'center',
    width: "60%",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },
  checkBox: {
    marginLeft: 15,
    width: 30,
    height: 30,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  dataContainer: {
    marginHorizontal: 15,
    width: "70%"
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "grey"
  }
})
