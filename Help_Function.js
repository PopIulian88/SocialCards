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
            <Text style={{fontSize: 24, color: text_color}}>{name}</Text>
                <TextInput
                    style={styles.textBox}
                    onChangeText={onChangeText}
                    placeholder={myText}
                />
        </View>
    )
}

export function CardComponent({name, goTo, navigation}) {
    return (
        <TouchableOpacity style={styles.cardBorder}
                          onPress={() => {navigation.navigate(goTo)}}
        >
            <Text style={{fontSize: 21}}>{name}</Text>
        </TouchableOpacity>
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
        backgroundColor: box_color,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardBorder: {
        height: 100,
        width: 200,
        backgroundColor: textBox_color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 5,
    },
});