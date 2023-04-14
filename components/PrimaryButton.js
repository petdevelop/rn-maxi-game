
import { View, Text, Pressable, StyleSheet } from "react-native"

export const PrimaryButton = ({children}) => {

    const pressHandler = () => {
        console.log('pressed')
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ?  [styles.buttonInnerContainer, styles.pressed] 
                    : styles.buttonInnerContainer} 
                onPress={pressHandler} 
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )            
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: 'magenta',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})