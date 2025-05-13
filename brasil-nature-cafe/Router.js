import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, Foundation, Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native';
import { View, StyleSheet } from 'react-native';

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
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#D17842',
        tabBarInactiveTintColor: '#52555A'
        }}>

       <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ focused }) => (
              <View style={[styles.iconContainer, focused && styles.activeIcon]}>
                <Ionicons name='home' size={24} color={focused ? '#FFF' : '52555A'}/>
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="Favorites" 
          component={Favoritos}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({ focused }) => (
              <View style={[ styles.iconContainer, focused && styles.activeIcon]}>
                <Foundation name='heart' size={24} color={ focused ? '#FFF' : '#52555A'}/>
              </View>
            )
          }}
          />

        <Tab.Screen 
          name="ShoppingCart" 
          component={ShoppingCartScreen}
         options={{
            tabBarLabel: 'Carrinho',
            tabBarIcon: ({ focused }) => (
              <View style={[ styles.iconContainer, focused && styles.activeIcon]}>
                <Feather name='shopping-cart' size={24} color={ focused ? '#FFF' : '#52555A'}/>
              </View>
            )
          }}/>

       <Tab.Screen 
          name="Account" 
          component={MyAccount}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ focused }) => (
              <View style={[ styles.iconContainer, focused && styles.activeIcon]}>
                <MaterialIcons name='account-circle' size={24} color={ focused ? '#FFF' : '#52555A'}/>
              </View>
            )
          }}
          />
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
        {/* <Stack.Screen name="capuccino" component={CapuccinoScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="express" component={ExpressScreen} options={{ headerShown: false}} />
        <Stack.Screen name="american" component={AmericanScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="traditional" component={TraditionalScreen} options={{ headerShown: false}} />
        <Stack.Screen name="no sugar" component={NoSugarScreen} options={{ headerShown: false }}/> */}

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

const styles = StyleSheet.create({
  tabBar:{
    backgroundColor: '#1a1e25',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 70,
    position: 'absolute',
    borderTopWidth: 0
  },
  iconContainer:{
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'transparent'
  },
  activeIcon:{
    backgroundColor: '#D17842'
  }
})



