import { StyleSheet, Text, View } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title"
import Colors from "../constants/Colors"

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
    return <View style={styles.container}>
        <Title>Game Over!</Title>
        <Text style={styles.summaryText}>Your phone needed  
            <Text style={styles.highlight}> {roundsNumber}</Text> rounds to guess the number 
            <Text style={styles.highlight}> {userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 50,
        padding: 50
    },
    summaryText: {
        fontSize: 24,
        marginVertical: 20,
        textAlign: 'center'
    },
    highlight: {
        color: Colors.yellow
    }
})

export default GameOverScreen