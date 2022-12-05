import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ResultadoFinal from '../screens/ResultadoFinal';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="ResultadoFinal" component={ResultadoFinal} />
  </Stack.Navigator>
);
