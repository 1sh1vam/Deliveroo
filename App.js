import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import BasketScreen from './screens/BasketScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import HomeScreen from './screens/HomeScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: 'modal', headerShown: false }}
          />
          <Stack.Screen
            name="PreparingOrderScreen"
            options={{
              presentation: 'fullScreenModal',
              headerShown: false,
            }}
            component={PreparingOrderScreen}
          />
          <Stack.Screen
            name="Delivery"
            options={{
              presentation: 'fullScreenModal',
              headerShown: false,
            }}
            component={DeliveryScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
