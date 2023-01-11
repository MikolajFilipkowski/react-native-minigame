import { View, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
    function pressHandler() {
        console.log("Click")
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} 
            maxLength={2} 
            keyboardType='number-pad' 
            autoCorrect={false} 
            autoCapitalize='none'></TextInput>
            <PrimaryButton pressHandler={pressHandler}> Reset </PrimaryButton>
            <PrimaryButton pressHandler={pressHandler}> Submit </PrimaryButton>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems:'center',
        justifyContent:'center',
        marginTop: 100,
        padding: 10,
        marginHorizontal: 24,
        backgroundColor: '#f8e7ff',
    },
    numberInput: {
        width:50,
        height:50,
        fontSize:25,
        borderBottomColor: '#ddb52f',
        borderBottomWidth:2,
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center',
    }
});