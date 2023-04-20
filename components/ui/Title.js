import { StyleSheet, Text } from "react-native"
import Colors from "../../constants/Colors" 

const Title = ({children}) => {
    return <Text style={styles.title}>{ children }</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.white,
        padding: 12,
        borderRadius: 8
    }
})

export default Title