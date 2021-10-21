import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 
 * @param {string} key llave para enlazar con los datos
 * @param {string} value datos a almacenar
 */
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("STORED!");
  } catch (error) {
    console.log("ERROR=>", error);
  }
}

/**
 * 
 * @param {string} key llave para aceder a los datos guardados
 * @returns 
 */
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
  } catch (e) {
    console.log("ERROR=>", error);
  }
}