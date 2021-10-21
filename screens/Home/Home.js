import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button';
import Item from '../../components/Item/Item';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { getData, storeData } from '../../helpers/storageServices';
import { useFocusEffect } from '@react-navigation/core';
import { FaPlus } from "react-icons/fa";

//Componente inicial donde mostramos la lista. 
//Todo componente dentro de un Navigator tiene como prop un "navigation" que le permite acceder a distintos métodos.
const Home = ({ navigation }) => {
  //useState encargado de manejar la lista, dentro de los parámetros del Hook tenemos el estado inicial.
  //Dicho puede ser cualquier tipo de variable en JavaScript, en este caso es un array con un objeto.
  //El primer elemento es la variable que nos permite acceder a los datos, este es inmutable.
  //El segundo es una función que nos permite modificar dicho elemento.
  const [todoList, setTodoList] = useState([{ name: "Nombre de Ejemplo", desc: "Descripción de ejemplo", finished: false },
  ])

  //Función anónima que llama al método "navigate" de la propiedad "navigation". Recibe dos argumentos:
  //1. El nombre del componente al cual queremos ir, el cual debe ser el mismo que el parámetro "Name" de la navegación
  //2. Un objeto opcional con propiedades que queramos pasarle al componente por medio de la ruta
  const goToNew = () => navigation.navigate("NewTask", { setTodoList: setTodoList })

  //Hook useEffect que ejecuta una función cada vez que cambian las variables pasadas por el arreglo de dependencias.
  //Si este se encuentra vacío se ejecutará solo una vez al renderizar el componente
  useEffect(async () => {
    let list = await getData('list');
    setTodoList(list);
  }, [])

  //Hook de la navegación. Este se ejecuta cuando el componente es enfocado.
  //También contiene una arreglo de dependencias.
  useFocusEffect(async () => {
    if (todoList.length > 0) {
      await storeData('list', JSON.stringify(todoList));
    }
  }, [todoList])

  return (
    <View style={styles.homeContainer}>
      <Header title="TODO List" />
      <Button handlePress={goToNew} Icon={FaPlus} style={styles.homeButton} />
      <View style={styles.itemsContainer}>
        <ScrollView style={styles.scrollView}>
          {
            todoList.length > 0 &&
            todoList.map(item => (
              <Item name={item.name} desc={item.desc} finished={item.finished} todoList={todoList} setTodoList={setTodoList} />
            ))
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  homeContainer: {
    padding: 15,
    flex: 1
  },
  homeButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    zIndex: 5
  },
  itemsContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    width: "100%",
    flex: 1,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  }
})
