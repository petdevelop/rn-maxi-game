
import { Alert, StyleSheet, TextInput, View, Text } from "react-native"
import { useState } from "react"
import PrimaryButton from "../components/ui/PrimaryButton"
import Colors from "../constants/Colors"
import Title from "../components/ui/Title"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"

const StartGameScreen = ({onPickNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || enteredNumber <= 0 || enteredNumber > 99) {
            Alert.alert(
                'Invalid number!', 
                'Number has to be a value between 0 and 99.', 
                [{
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetInputHandler
                }]);
            return;
        }

        onPickNumber(chosenNumber)
     }

    return(
        <View style={styles.rootContainer}>
            <View>
                <Title>Guess my number</Title>
            </View>
            
            <Card>
                <InstructionText text={'Enter a number'} />
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}> 
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>            
        </View>

    )

}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'stretch',
        margin: 5
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.yellow,
        borderBottomWidth: 2,
        color: Colors.yellow,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    },


})

export default StartGameScreen