import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from "react";

const bg_color = '#013A20';
const header_color = '#536F16';
const textBox_color = '#D4D6CF';
const box_color = '#3F4122';
const text_color = '#21B6A8';

export const Spacer = ({height = 15}) => {
    return(
        <View style={{marginTop: height}}/>
    )
}

export function TocuchO({name, goTo, navigation}) {
    return (
        <TouchableOpacity style={styles.pageButtons}
                          onPress={() => {navigation.navigate(goTo)}}
        >
            <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
    )
}

export function TextBox({name, myText}) {

    const [text, onChangeText] = React.useState(null);

    return (
        <View style={styles.textBoxContainer}>
            <View style={{height: '30%', width: '90%', alignItems: 'center' ,justifyContent: 'center'}}>
                <Text style={{fontSize: 24, color: text_color}}>{name}</Text>
            </View>
            <View style={{height: '70%', width: '90%', alignItems: 'center' ,justifyContent: 'center'}}>
                <TextInput
                    style={styles.textBox}
                    onChangeText={onChangeText}
                    placeholder={myText}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({


    textBoxContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },

    textBox: {
        height: 50,
        width: '85%',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 15,
        borderWidth: 2,
        backgroundColor: textBox_color,
    },

    buttonText: {
        fontSize: 36,
        fontWeight: 'bold',
    },

    pageButtons: {
        height: 100,
        width: '70%',
        borderRadius: 25,
        backgroundColor: textBox_color,
        alignItems: 'center',
        justifyContent: 'center',
    },
});