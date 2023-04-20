import { StyleSheet, View } from "react-native"
import Colors from "../../constants/Colors"

const Card = ({children}) => {
    return <View style={styles.conntainer}>
        { children }
    </View>
}

const styles = StyleSheet.create({
    conntainer: {
        padding: 16,
        marginTop: 36,
        backgroundColor: Colors.purple,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Card