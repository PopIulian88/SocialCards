import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {Spacer, TocuchO, TextBox} from "./Help_Function";

const bg_color = '#013A20';
const header_color = '#536F16';
const textBox_color = '#D4D6CF';
const box_color = '#3F4122';
const text_color = '#21B6A8';

function StartPage({navigation}) {
    return(
        <View style={styles.container}>

            <TocuchO name={"Login"} goTo={"LoginPage"} navigation={navigation}/>

            <Spacer height={20}/>

            <TocuchO name={"Signup"} goTo={"SignupPage"} navigation={navigation}/>

        </View>
    )
}


function LoginPage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{height: "40%", width: "100%"}}>
                <TextBox name={"Email:"} myText={"Type your email here"}/>

                <TextBox name={"Password:"} myText={"Type your password here"}/>
            </View>
            <Spacer/>
            <View style={{alignItems: 'center', height: "60%", width: "100%"}}>
                <TocuchO name={"Login"} goTo={SocialCardsPage} navigation={navigation}/>
            </View>

        </View>
    )
}

function SignupPage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{height: "60%", width: "100%"}}>
                <TextBox name={"Email:"} myText={"Type your email here"}/>

                <TextBox name={"Password:"} myText={"Type your password here"}/>

                <TextBox name={"Verify password:"} myText={"Type password again"}/>
            </View>
            <Spacer/>
            <View style={{alignItems: 'center', height: "30%", width: "100%", justifyContent: 'center'}}>
                <TocuchO name={"Signup"} goTo={SocialCardsPage} navigation={navigation}/>
            </View>
        </View>
    )
}

function SocialCardsPage({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Bani</Text>
        </View>
    )
}


export default function App() {

    const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator>
              <Stack.Screen name={"StartPage"} component={StartPage}  options={styles.header}/>
              <Stack.Screen name={"LoginPage"} component={LoginPage} options={styles.header}/>
              <Stack.Screen name={"SignupPage"} component={SignupPage} options={styles.header}/>
              <Stack.Screen name={"SocialCardsPage"} component={SocialCardsPage} options={styles.header}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

//Function that help me



const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: bg_color,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
  },

    header: {
        headerStyle: {
            backgroundColor: header_color,
        },
        headerTintColor: text_color,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
    },
});
