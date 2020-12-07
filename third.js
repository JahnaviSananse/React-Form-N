import React from 'react';
import {StyleSheet, View, Text,Image} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Sixth from './Sixth';
import third from "./third";
// import Fourth from "src/screens/app/Fourth";
// import Fifth from "src/screens/app/Fifth";
// import Sixth from "src/screens/app/Sixth";


// const third = () => {
//   return (
//     <View style={{width: '100%', height: '100%', backgroundColor: 'grey'}} />
//   );
// };
// const TabNavigator = createMaterialBottomTabNavigator({
//   third: {
//     screen: third,
//     navigationOptions: {
//       tabBarLabel: 'Home',
//       activeColor: 'red',
//       inactiveColor: 'gray',
//       barStyle: {backgroundColor: 'lightgray'},
//        tabBarIcon: () => (
//         <Image style={styles.icon} source={require('./home.png')} />
//       ),
//     },
//   },

//   Fourth: {
//     screen: Fourth,
//     navigationOptions: {
//       tabBarLabel: 'Mentions',
//       activeColor: 'red',
//       inactiveColor: 'gray',
//       barStyle: {backgroundColor: 'lightgray'},
//       tabBarIcon: () => (
//         <Image style={styles.icon} source={require('./loupe.png')} />
//       ),
//     },
//   },

//   Fifth: {
//     screen: Fifth,
//     navigationOptions: {
//       tabBarLabel: 'You',
//       activeColor: 'red',
//       inactiveColor: 'gray',
//       barStyle: {backgroundColor: 'lightgray'},
//       tabBarIcon: () => (
//         <Image style={styles.icon} source={require('./safari.png')} />
//       ),
//     },
//   },

//   Sixth: {
//     screen: Sixth,
//     navigationOptions: {
//       tabBarLabel: 'Search',
//       activeColor: 'red',
//       inactiveColor: 'gray',
//       barStyle: {backgroundColor: 'lightgray'},
//       tabBarIcon: () => (
//         <Image style={styles.icon} source={require('./user.png')} />
//       ),
//     },
//   },
// });

// export default createAppContainer(TabNavigator);

// const styles = StyleSheet.create({
//     icon: {
//         width: 20,
//         height: 20,
    
//         //alignSelf: 'center',
//         //marginRight: 30,
//         //marginLeft: 10,
//       },
// });


const SettingStack = createStackNavigator();
function SettingComponent() {
   return (
     <Text> hello </Text>,
      <SettingStack.Navigator
         initialRouteName="third"
         screenOptions={{
            headerShown: false,
         }}
         headerMode={"screen"}
      >
         <SettingStack.Screen
            name="third"
            component={third}
            options={({ route }) => {
               return {
                  headerBackTitle: "",
                  headerTitle: "third",
               };
            }}
         />
         <SettingStack.Screen
            name="Fourth"
            component={Fourth}
            options={({ route }) => {
               return {
                  headerBackTitle: "",
                  headerTitle: "Fourth",
               };
            }}
         />
         <SettingStack.Screen
            name="Fifth"
            component={Fifth}
            options={({ route }) => {
               return {
                  headerBackTitle: "",
                  headerTitle: "Fifth",
               };
            }}
         />
         <SettingStack.Screen
            name="Sixth"
            component={Sixth}
            options={({ route }) => {
               return {
                  headerBackTitle: "",
                  headerTitle: "Sixth",
               };
            }}
         />
        
      </SettingStack.Navigator>
   );
}

const Tab = createBottomTabNavigator();

export const App = () => {
  alert('demo')

  return (
   
     <Text> hi </Text>,
      <Tab.Navigator
         initialRouteName="third"
         tabBarOptions={{
            activeTintColor: "#4FB263",
            inactiveTintColor: "#8D8E90",
            style: {
               borderTopRightRadius: 5,
               borderTopLeftRadius: 5,
               height: CONSTANT.IS_IPHONEX ? 100 : 70,
               backgroundColor: "#1F2428",
            },
            labelPosition: "below-icon",
            labelStyle: {
               fontFamily: "Arial",
               fontWeight: "bold",
               fontSize: 12,
               // paddingTop: 5,
               paddingBottom: 8,
               textAlign: "center",
            },
         }}
      >
         
        
          <Tab.Screen
            name="Settings"
            component={SettingComponent}
            options={({ route }) => ({
               tabBarLabel: "Settings",
               tabBarVisible: getTabBarVisible(route),
               tabBarIcon: ({ color, size, focused }) => (
                  <Image
                     source={
                        focused
                           ? IMAGES.IC_TAB_SETTING_SELECTED
                           : IMAGES.IC_TAB_SETTING
                     }
                     resizeMode={"contain"}
                     style={{ height: 25, width: 25 }}
                  />
               ),
            })}
         />
        
      </Tab.Navigator>
   );
};
