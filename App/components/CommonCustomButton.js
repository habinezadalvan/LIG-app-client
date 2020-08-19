import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CommonCustomButton(props) {

    const content = (
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.text}>{props.text}</Text>
            <MaterialIcons name={props.iconName} size={25} color="white"/>
        </View>
    )

return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 24,
        width: 180,
        height: 50,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowRadius: 5,
        shadowOpacity: .1,
        backgroundColor: 'red'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})