//rotas
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Foundation, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native';

import Home from './src/pages/home';
import ShoppingCartScreen from './src/pages/ShoppingCart';
import NotificationsPage from './src/pages/Notifications';
import Detail from './src/pages/Detail';
import MyAccount from './src/pages/Account';
import Favoritos from './src/pages/Favorites';
import CapuccinoScreen from './src/pages/CapuccinoScreen';
import ExpressScreen from './src/pages/ExpressScreen';
import AmericanScreen from './src/pages/AmericanScreen'
import TraditionalScreen from './src/pages/TraditionalScreen';
import NoSugarScreen from './src/pages/NoSugarScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const backToHomeHeader = ( navigataion ) => ({
  headerShown: false,
  headerLeft: () => (
    <TouchableOpacity onPress={navigataion.navigate('home')} style={{ marginLeft: 15, zIndex: 2}}>
      <MaterialIcons name="arrow-back" size={24} color="#d17842"></MaterialIcons>
    </TouchableOpacity>
  )
})

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

        {/* <Tab.Screen 
          name="notification" 
          component={NotificationsPage}
          options={{ 
            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size}/>,
            tabBarLabel: 'Início'
          }} 
        /> */}

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
           options={{ headerShown: false}}
         />
        <Stack.Screen name="capuccino" component={CapuccinoScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="express" component={ExpressScreen} options={{ headerShown: false}} />
        <Stack.Screen name="american" component={AmericanScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="traditional" component={TraditionalScreen} options={{ headerShown: false}} />
        <Stack.Screen name="no sugar" component={NoSugarScreen} options={{ headerShown: false }}/>

         {/* <Stack.Scree§§n
          name="Account"
          component={MyAccount}
          /> */}

         {/* <Stack.Screen
          name='Favorites'
          component={Favoritos}
          /> */}

         <Stack.Screen
            name="Notification"
            component={NotificationsPage}
          />
          {/* <Stack.Screen
            name='ShoppingCart'
            component={ShoppingCartScreen}
          /> */}

       </Stack.Navigator>
     </NavigationContainer>
  );
 };

 
 
 export default Routes;



