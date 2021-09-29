import { Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    defaultView: {
        alignItems: 'center',
        justifyContent: 'center',
        width,
        height
    }
})

export { styles }