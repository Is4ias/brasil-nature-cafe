//rotas
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, Feather, FontAwesome5, Foundation, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native';

import Home from './src/pages/home';
import ShoppingCartScreen from './src/pages/ShoppingCart';
import NotificationsPage from './src/pages/NotificationsScreen';
import Detail from './src/pages/Detail';
import MyAccount from './src/pages/Account';
import Favoritos from './src/pages/Favorites';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs() {
  return (
     <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#0C0F14'},
        tabBarActiveTintColor: '#D17842',
        tabBarInactiveTintColor: '#52555A'
        }}>

       <Tab.Screen 
          name="Home" 
          component={Home}
          options={{ 
            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size}/>,
            tabBarLabel: 'Início'
          }} 
        />

        <Tab.Screen 
          name="Favorites" 
          component={Favoritos}
          options={{
            tabBarIcon:({ color, size }) => <Foundation name="heart" color={color} size={size}/>,
            tabBarLabel: 'Favorites'
          }}/>

        <Tab.Screen 
          name="ShoppingCart" 
          component={ShoppingCartScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="cart" color={color} size={size}/>,
            tabBarLabel: 'Shopping Cart'
          }}/>

       <Tab.Screen 
          name="Account" 
          component={MyAccount}
          options={{
            tabBarIcon: ({ color, size }) => <MaterialIcons name="account-circle" color={color} size={size}/>,
            tabBarLabel: 'My Account'
          }} />
     </Tab.Navigator>
  );
 }


 
const Routes = () => {
  return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen
           name="home"
           component={Tabs}
           options={{ 
            headerShown: false,
            headerRight: () => (
              <TouchableOpacity>
                <Entypo style={{ top: 55 }}
                  name="bell"
                  size={28}
                  color="#52555A"
                />
              </TouchableOpacity>
            )
          }}
         />
 
         <Stack.Screen
           name="Detail"
           component={Detail}
           options={{
             headerRight: () => (
               <TouchableOpacity style={{ marginRight: 15 }}>
                 <Feather name="heart" size={24} color="black" onPress={Favoritos}/>
               </TouchableOpacity>
             ),
           }}
         />

         <Stack.Screen
          name="Account"
          component={MyAccount}
          options={{
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 15}}>
                <Feather name="arrow-left" size={24} color="#DC3535"></Feather>
              </TouchableOpacity>
            )
          }}>
         </Stack.Screen>

         <Stack.Screen
          name='Favorities'
          component={Favoritos}
          options={{
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 15}}>
                <Feather name="arrow-left" size={24} color="#DC3535"></Feather>
              </TouchableOpacity>
            )
          }}/>

         <Stack.Screen
            name="Notificações"
            component={NotificationsPage}
            options={{
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 15}}>
                  <Feather name='shopping-cart' size={24} color="black"></Feather>
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name='Carrinho'
            component={ShoppingCartScreen}
            options={{
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 15 }}>
                  <Feather name="shopping-cart" size={24} color="#DC3535" />
                </TouchableOpacity>
              ),

            }}
          />

       </Stack.Navigator>
     </NavigationContainer>
  );
 };


 
 
 export default Routes;



