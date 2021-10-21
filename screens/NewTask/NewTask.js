import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { StyleSheet, Text, View, } from 'react-native'
import { FaArrowLeft, FaSave } from "react-icons/fa";
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useRoute } from '@react-navigation/core';

//Componente de creación de una tarea
const NewTask = ({ navigation }) => {

  //Controlamos los parámetros a través del hook useState
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  //useRoute es un hook que nos permite acceder a los parámetros que el componente recibe por las rutas
  const route = useRoute();

  //Función encargada de la navegación
  const goToHome = () => navigation.navigate("Home")

  //Función encargada de guardar una tarea en la lista
  const saveTodo = () => {
    //Aquí usamos el objeto "route" para acceder a los parámetros de la ruta, donde encontramos la función "setTodoList".
    //Esta viene del useState en Home.
    route.params.setTodoList(prev => prev.concat({ name: name, desc: desc, finished: false }))
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
