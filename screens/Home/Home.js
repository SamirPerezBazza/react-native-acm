import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { FaPlus } from "react-icons/fa";
import Button from '../../components/Button/Button';
import Item from '../../components/Item/Item';
import { getData, storeData } from '../../helpers/storageServices';
import { useFocusEffect } from '@react-navigation/core';

const Home = ({ navigation }) => {
  const [todoList, setTodoList] = useState([{ name: "Nombre de Ejemplo", desc: "Descripción de ejemplo" },
  ])

  const goToNew = () => navigation.navigate("NewTask", { setTodoList: setTodoList })


  useEffect(async () => {
    let list = await getData('list');

    setTodoList(list);
  }, [])

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
              <Item name={item.name} desc={item.desc} />
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
