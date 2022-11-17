import React from 'react';
import { StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from './src/pages/Contacts'
import Information from './src/pages/Information'
import Teste from './src/pages/Teste';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator >
        <Tab.Screen name="Home" component={Contacts} options={{headerShown: false }}/>
       <Tab.Screen name="Information" component={Information} options={{headerShown: false }}/>
       <Tab.Screen name="Teste" component={Teste}  options={{headerShown: false }}/>
     </Tab.Navigator>
  )
}

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator >
       <Stack.Screen name="Benizi" component={Contacts} options={{headerShown: false }} /> 
       <Stack.Screen name="Information" component={Tabs}options={{headerShown: false }}
/>

     </Stack.Navigator>
   </NavigationContainer>
  );
}

const estilo = StyleSheet.create({
  nav:{
    flex:1,
    backgroundColor: "#60EFE0",
    alignItems: "center",
    justifyContent:"center"
  },
})
