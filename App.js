import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import Colors from './constants/Colors'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

const App = () => {

    const [userNumber, setUserNumber] = useState(null)
    const [gameIsOver, setGameIsOver] = useState(false)

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber)
        setGameIsOver(false)
    }

    const gameOverHandler = () => {
        setGameIsOver(true)
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen />
    }

    return (

        <LinearGradient colors={[Colors.magenta, Colors.yellow]} style={styles.rootScreen}>
            <ImageBackground 
                source={require('./assets/splash.png')} 
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>{ screen }</SafeAreaView>
           
            </ImageBackground>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundImage: {
      opacity: 0.15
    }
  }
})

export default App
