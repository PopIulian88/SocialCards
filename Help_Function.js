import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from "react";
import {Icon} from "@rneui/themed";

const bg_color = '#013A20';
const header_color = '#536F16';
const textBox_color = '#D4D6CF';
const box_color = '#999900';
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

export function InfoLinkComponent() {
    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <TextBox name={"Name"} myText={"Link name"}/>
            <TextBox name={"Link"} myText={"Type link"}/>
            <Icon
                reverse
                name="person"
                color={box_color}
                onPress={() => alert("Put your photo")}
            />
        </View>
    )
}

export function IconLink() {
    return(
        <View style={{alignItems: 'center'}}>
            <Icon
                reverse
                name="link"
                size={40}
                color={box_color}
                onPress={() => alert("Nu-mi da drumu")}
            />
            <Text>Link Name</Text>
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