import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Products from './src/screens/Products';
import Cart from './src/screens/Cart';
import Profile from './src/screens/Profile';
import ProductDetail from './src/screens/ProductDetail';

const Tab = createBottomTabNavigator();
const ItemStack = createStackNavigator();

const ItemScreen = () => {
  return (
    <ItemStack.Navigator>
      <ItemStack.Screen
        name="Products"
        component={Products}
        options={{
          headerShown: false,
        }}
      />
      <ItemStack.Screen name="Item Detail" component={ProductDetail} />
    </ItemStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerTitleStyle: {color: 'tomato'},
          headerTitleAlign: 'center',
        }}>
        <Tab.Screen
          name="Home"
          component={ItemScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Icon name="home" color={focused ? 'tomato' : 'gray'} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="shopping-cart"
                color={focused ? 'tomato' : 'gray'}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon name="user" color={focused ? 'tomato' : 'gray'} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
  },
});
