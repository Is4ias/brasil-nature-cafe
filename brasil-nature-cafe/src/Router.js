//rotas
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, Entypo, Foundation, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native';


import Home from './pages/home';
import ShoppingCartScreen from './pages/ShoppingCart';
import NotificationsPage from './pages/NotificationsScreen';
import Detail from './pages/Detail';
import Detail2 from './pages/DetailDois';
import MyAccount from './pages/Account';
import favoritos from './pages/Favorites';
import ProductScreen from './pages/Product';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
            tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
            tabBarLabel: 'Início'
          }} 
        />

       <Tab.Screen 
          name="ShoppingCart" 
          component={ShoppingCartScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Feather name="shopping-bag" color={color} size={size}/>,
            tabBarLabel: 'Shopping Cart'
          }}/>

        <Tab.Screen 
          name="Favorites" 
          component={favoritos}
          options={{
            tabBarIcon:({ color, size }) => <Foundation name="heart" color={color} size={size}/>,
            tabBarLabel: 'Favorites'
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

function DrawerNavigator() {
  return(
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen
        name="Home"
        component={Tabs}
        options={{ drawerLabel: 'Home'}}>
      </Drawer.Screen>

      <Drawer.Screen
        name="MyAccount"
        component={MyAccount}
        options={{ drawerLabel:'My Account' }}>
      </Drawer.Screen>

      <Drawer.Screen
        name='Favorites'
        component={favoritos}
        options={{ drawerLabel: 'Favorites'}}>
      </Drawer.Screen>

    </Drawer.Navigator>
  );
}
 
 const Routes = () => {
  return (
     <NavigationContainer>
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false}}>
      </Stack.Screen>


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
         <Stack.Screen
         name="Account"
         component={MyAccount}
         options={{
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 15}}>
              <Feather name="arrow-left" size={24} color="black"></Feather>
            </TouchableOpacity>
          )
         }}>
         </Stack.Screen>

         <Stack.Screen
         name='Favorities'
         component={favoritos}
         options={{
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 15}}>
              <Feather name="arrow-left" size={24} color="black"></Feather>
            </TouchableOpacity>
          )
         }}/>

         <Stack.Screen
         name="Product"
         component={ProductScreen}
         options={{
          headerRight: () => (
            <TouchableOpacity style={{ marginRigth: 15}}>
              <Feather name='shopping-cart' size={24} color="Black"></Feather>
            </TouchableOpacity>
          )
         }}/>
         <Stack.Screen
          name="Notificações"
          component={NotificationsPage}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRigth: 15}}>
                <Feather name='shopping-cart' size={24} color="Black"></Feather>
              </TouchableOpacity>
            )
          }}/>



      

       </Stack.Navigator>
     </NavigationContainer>
  );
 };


 
 
 export default Routes;



{/* <NavigationContainer>
          <Drawer.Navigator initialRouterName="home">
            <Drawer.Screen name="" component={}/>
            <Drawer.Screen name="" component={}/>
          </Drawer.Navigator>
         </NavigationContainer> */}

