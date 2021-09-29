import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Pokedex, Stream, Voip } from '../screens';

const Stack = createStackNavigator()

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Pokedex" component={Pokedex} />
            <Stack.Screen name="Stream" component={Stream} />
            <Stack.Screen name="Voip" component={Voip} />
        </Stack.Navigator>
    )
}

export default Navigation
