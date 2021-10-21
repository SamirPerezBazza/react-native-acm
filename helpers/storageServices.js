import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("STORED!");
  } catch (error) {
    console.log("ERROR=>", error);
  }
}

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