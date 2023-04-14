
import { Alert, StyleSheet, TextInput, View } from "react-native"
import { useState } from "react"
import { PrimaryButton } from "../components/PrimaryButton"

export const StartGameScreen = ({onPickNumber}) => {
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
        <View style={styles.inputContainer}>
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
        </View>
    )

}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        backgroundColor: 'purple',
        marginHorizontal: 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: 'yellow',
        borderBottomWidth: 2,
        color: 'yellow',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})