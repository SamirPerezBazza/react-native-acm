import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { StyleSheet, Text, View, } from 'react-native'
import { FaArrowLeft, FaSave } from "react-icons/fa";
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useRoute } from '@react-navigation/core';

const NewTask = ({ navigation }) => {

  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  const route = useRoute();

  const goToHome = () => navigation.navigate("Home")

  const saveTodo = () => {
    console.log("NAME=>", name);
    console.log("DESC=>", desc);
    route.params.setTodoList(prev => prev.concat({ name: name, desc: desc }))
    goToHome();
  }

  return (
    <View style={styles.newContainer}>
      <Header title="New Task" />
      <Button handlePress={goToHome} Icon={FaArrowLeft} style={styles.backButton} colorIcon="#48494B" />
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Name</Text>
        <Input value={name} setValue={setName} />
        <Text style={styles.text}>Description</Text>
        <Input value={desc} setValue={setDesc} />
      </View>
      <Button handlePress={saveTodo} Icon={FaSave} style={styles.button} />
    </View>
  )
}

export default NewTask

const styles = StyleSheet.create({
  newContainer: {
    flex: 1,
    padding: 15,
  },
  inputContainer: {
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    width: "100%"
  },
  text: {
    fontWeight: "bold",
    marginTop: 10
  },
  backButton: {
    backgroundColor: "#FFF",
    position: 'absolute',
    left: 15,
    top: 25
  },
  button: {
    alignSelf: 'center',
    marginTop: 20
  }
})
