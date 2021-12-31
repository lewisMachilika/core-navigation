// import React from "react";

// import { createDrawerNavigator } from "@react-navigation/drawer";

// import { ContactStackNavigator } from "./StackNavigator";
// import TabNavigator from "./TabNavigator";

// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={TabNavigator} />
//       <Drawer.Screen name="Contact" component={ContactStackNavigator} />
//     </Drawer.Navigator>
//   );
// }

// export default DrawerNavigator;

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import About from "../screens/About";
import Header from "../shared/Header";
import {MaterialIcons} from '@expo/vector-icons'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName='Home'         
    screenOptions={{
        headerTitleAlign:'center',
        //headerShown: false
        }}
    >
      <Stack.Screen name='Home' component={Home} options={({navigation})=>{ return {headerTitle:()=><Header navigation={navigation} title='Home'/> }}} />
      <Stack.Screen name='Contact' component={Contact} />
      <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
  );
};

const MenuNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName='Home'     
    screenOptions={{
        headerTitleAlign:'center',
        //headerShown: false
        }}>
      <Stack.Screen name='Menu' component={About} options={({navigation})=>{ return {headerTitle:()=><Header navigation={navigation} title='About'/> }}} />
    </Stack.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={
        {

            headerShown: false
            
        }
    }>
      <Drawer.Screen name='HomeNavigation' component={HomeNavigation} options={{drawerLabel:"Home",          
       drawerIcon: ({focused, size}) => (
              <MaterialIcons
                 name="home" size={20}
              />
           )}} /> 
      <Drawer.Screen name='MenuNavigation' component={MenuNavigation} options={{
          drawerLabel:"About",
          drawerIcon: ({focused, size}) => (
            <MaterialIcons
               name="info" size={20}
            />
         )
         }}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;