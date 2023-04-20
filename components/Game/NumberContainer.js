import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/Colors"


const NumberContainer = ({children}) => {

    return <View style={styles.container}>
        <Text style={styles.numberText}>{ children }</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.yellow,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.yellow,
        fontSize: 36,
        fontWeight: 'bold'
    }
})

export default NumberContainer