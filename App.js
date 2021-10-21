import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './routes'

//Creación de una variable tipo "StackNavigator" 
const Stack = createNativeStackNavigator();

//La función App es el principal componente funcional que se exporta en una aplicación.
//Este se suele utilizar para gestionar los componentes subyacentes en el árbol.
export default function App() {
  return (
    //Toda aplicación con navegación se debe encontrar dentro de un NavigatorContainer
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        {
          //Aquí se están mapeando las rutas del arreglo con sus respectivas propiedades
          routes.map(route => (<Stack.Screen key={route.name} name={route.name} component={route.component} />))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}