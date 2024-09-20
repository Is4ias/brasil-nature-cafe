//rotas
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
//import IconsApp from './src/componentes/IconsApp';

import Home from './pages/home';
import ShoppingCartScreen from './pages/ShoppingCart';
import NotificationsPage from './pages/NotificationsScreen';
import Detail from './pages/Detail';
import Detail2 from './pages/DetailDois';
import MyAccount from './componentes/Account';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
     <Tab.Navigator screenOptions={{ headerShown: false}}>
       <Tab.Screen name="Home" component={Home} />
       <Tab.Screen name="ShoppingCart" component={ShoppingCartScreen} />
       <Tab.Screen name="Notifications" component={NotificationsPage} />
       <Tab.Screen name="Account" component={MyAccount}/>
     </Tab.Navigator>
  );
 }
 
 const Routes = () => {
  return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen
           name="Tabs"
           component={Tabs}
           options={{ headerShown: false}}
         />
 
         <Stack.Screen
           name="Detail"
           component={Detail}
           options={{
             headerRight: () => (
               <TouchableOpacity style={{ marginRight: 15 }}>
                 <Feather name="shopping-cart" size={24} color="black" />
               </TouchableOpacity>
             ),
           }}
         />
 
         <Stack.Screen
           name="DetailDois"
           component={Detail2}
           options={{
             headerRight: () => (
               <TouchableOpacity style={{ marginRight: 15 }}>
                 <Feather name="shopping-cart" size={24} color="black" />
               </TouchableOpacity>
             ),
           }}
         />
         {/* <Stack.Screen
         name="">

         </Stack.Screen> */}











       </Stack.Navigator>
     </NavigationContainer>
  );
 };
 
 export default Routes;

// const Routes= () => {
//     return (
//         <NavigationContainer>
//           <Tab.Navigator
//             screenOptions={{
//               activeTintColor: '#ff8c00',
//               inactiveTintColor: '#aaa',
//               style: {
//                 backgroundColor: '#FFF',
//               },
//             }}
//           >
//             <Tab.Screen
//               name="PageHome"
//               component={Home}
//               options={{
//                 tabBarIcon: ({ color, size }) => (
//                   <MaterialIcons name="home-filled" size={size} color={color} />
//                 ),
//               }}
//             />
    
//             <Tab.Screen
//               name="ShoppingCart"
//               component={ShoppingCartScreen}
//               options={{
//                 tabBarIcon: ({ color, size }) => (
//                   <MaterialIcons name="shopping-bag" size={size} color={color} />
//                 ),
//               }}
//             />
    
//             <Tab.Screen
//               name="Notifications"
//               component={NotificationsPage}
//               options={{
//                 tabBarIcon: ({ color, size }) => (
//                   <MaterialIcons
//                     name="notifications-active" size={size} color={color}
//                   />
//                 ),
//               }}
//             />
//           </Tab.Navigator>
    
//           <Stack.Navigator>
//             <Stack.Screen
//                 name="PageHome"
//                 component={Home}
//                 options={{headerShown:false }}
//             /> 

//             <Stack.Screen
//               name="Detail"
//               component={Detail}
//               options={{
//                 headerRight: () => (
//                   <TouchableOpacity style={{ marginRight: 15 }}>
//                     <Feather name="shopping-cart" size={24} color="black" />
//                   </TouchableOpacity>
//                 ),
//               }}
//             />
    
//             <Stack.Screen
//               name="DetailDois"
//               component={Detail2}
//               options={{
//                 headerRight: () => (
//                   <TouchableOpacity style={{ marginRight: 15 }}>
//                     <Feather name="shopping-cart" size={24} color="black" />
//                   </TouchableOpacity>
//                 ),
//               }}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       );
//     };
    
//     export default Routes;
        



