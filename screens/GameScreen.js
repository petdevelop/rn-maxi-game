
import { Alert, FlatList, StyleSheet, Text, View } from "react-native"
import NumberContainer from "../components/Game/NumberContainer"
import Title from "../components/ui/Title"
import { useEffect, useState } from "react"
import PrimaryButton from "../components/ui/PrimaryButton"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from "../components/Game/GuessLogItem"


const generateRandomBetween = (min, max, exclude) => {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min

    if (rndNumber === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNumber
    }
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({userNumber, onGameOver}) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, userNumber, onGameOver])


    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])

    const nextGuesshanlder = (direction) => {

        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [{
                text: 'Sorry!', style: 'cancel'
            }])
            return 
        }

        if (direction == 'lower') {
            maxBoundary = currentGuess - 1
        } else {
            minBoundary = currentGuess + 1
        }


        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)

        setCurrentGuess(newRndNumber)
        setGuessRounds((prevState) => [newRndNumber, ...prevState])
    }

    const guessRoundsLength = guessRounds.length
    
    return <View style={styles.screen}>
        <Title><Text style={styles.title}>Opponent's guess</Text></Title>
        
        <NumberContainer>{ currentGuess }</NumberContainer>

        <Card>
            <InstructionText text={'Higher or lower?'} style={styles.instructionText} />

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuesshanlder.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white"/> 
                    </PrimaryButton>                    
                </View>
               <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuesshanlder.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color="white"/> 
                    </PrimaryButton>
               </View>
            </View>

        </Card>
        <View style={styles.listContainer}>
            <FlatList 
                data={guessRounds}
                renderItem={(itemData) => <GuessLogItem guess={itemData.item} roundNumber={guessRoundsLength - itemData.index}/>}
                keyExtractor={(item) => item}
            ></FlatList>
        </View>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'stretch'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12,
        fontSize: 24
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
})

export default GameScreen