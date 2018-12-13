import React from 'react'
import { Text, View, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding:20,
        backgroundColor:'#f0f0f0',
        textAlign:'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton:{
        color:'#fff',
        backgroundColor: 'red',
    },
    operationButtonSpecial:{
        color:'rgb(0,0,0)',
        backgroundColor: 'yellow',
    },
    buttonDouble:{  
        width: Dimensions.get('window').width / 4 * 2,
    }
})


export default props =>{
    const stylesButton = [styles.button]
    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.operationButton) stylesButton.push(styles.operationButton)
    if(props.operationButtonSpecial) stylesButton.push(styles.operationButtonSpecial)
    return(
        <TouchableHighlight onPress={()=> props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}