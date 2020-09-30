import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default function InputField({placeholder,secureTextEntry }) {
    return (
        <View style={styles.textInputContainer}>
            <TextInput secureTextEntry={secureTextEntry} style={styles.textInput} placeholder={placeholder} autoCapitalize="none"/>
        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        padding: 5,
        borderWidth: .5,
        borderColor: '#e5e5e5',
        marginTop: 7,
        height: 40,
        borderRadius: 5,
        color: '#0793FD',
        fontSize: 18
    }
})