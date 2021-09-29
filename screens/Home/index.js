import React from 'react'
import { Pressable, View } from 'react-native'
import { styles } from '../../styles'

const Home = () => {
    return (
        <View style={styles.defaultView}>
            <Pressable>
                <View style={{backgroundColor: 'red', width: 50, height: 50}}></View>
            </Pressable>
        </View>
    )
}

export default Home
