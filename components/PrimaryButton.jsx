import { View, Pressable, Text, StyleSheet } from 'react-native';

const PrimaryButton = (props) => {
    return (
        <Pressable 
        style={styles.btnContainer} 
        onPress={props.pressHandler} 
        android_ripple={{color:'dark'}}>
            <View>
                <Text style={styles.btnText}> {props.children} </Text>
            </View>
        </Pressable>
    );
}

export default PrimaryButton

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#25979c',
        borderRadius:20,
    },
    btnText: {
        color:'#ffffff',
        textAlign:'center',
    }
})