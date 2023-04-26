import { StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/Colors"

const InstructionText = ({text, style}) => {
    return <View>
        <Text style={[styles.main, style]}>{ text }</Text>
    </View>
}

const styles = StyleSheet.create({
    main: {     
        color: Colors.yellow,
        fontSize: 24
    }
})

export default InstructionText