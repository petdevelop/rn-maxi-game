import { StyleSheet, View, Text } from "react-native"
import Colors from "../../constants/Colors"


const GuessLogItem = ({roundNumber, guess}) => {
    return <View style={styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text>Opponent's Guess: {guess}</Text>
    </View>
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.purple,
        borderRadius: 40,
        borderWidth: 1,
        marginVertical: 8,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    }
})

export default GuessLogItem