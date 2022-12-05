import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {Spacer, TocuchO, TextBox, CardComponent, InfoLinkComponent} from "./Help_Function";
import {Icon} from "@rneui/themed";



const bg_color = '#013A20';
const header_color = '#536F16';
const textBox_color = '#D4D6CF';
const box_color = '#999900';
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
        <View style={styles.scrollViewContainer}>
            <Icon
                name='arrow-back'
                reverse
                color= {box_color}
                onPress ={() => navigation.navigate("StartPage")}
            />
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
                <View>
                    <TextBox name={"Email:"} myText={"Type your email here"}/>

                    <Spacer/>

                    <TextBox name={"Password:"} myText={"Type your password here"}/>
                </View>
            </ScrollView>
            <Spacer/>
            <View style={{alignItems: 'center', flexGrow: 1, justifyContent: 'flex-start'}}>
                <TocuchO name={"Login"} goTo={SocialCardsPage} navigation={navigation}/>
            </View>
        </View>
    )
}

function SignupPage({navigation}) {
    return (
        <View style={styles.scrollViewContainer}>
            <Icon
                name='arrow-back'
                reverse
                color= {box_color}
                onPress ={() => navigation.navigate("StartPage")}
            />
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
                <View>
                    <TextBox name={"Email:"} myText={"Type your email here"}/>
                    <Spacer/>

                    <TextBox name={"Password:"} myText={"Type your password here"}/>
                    <Spacer/>

                    <TextBox name={"Verify password:"} myText={"Type password again"}/>
                </View>
            </ScrollView>
            <Spacer/>
            <View style={{alignItems: 'center', flexGrow: 1, justifyContent: 'flex-start'}}>
                <TocuchO name={"Signup"} goTo={SocialCardsPage} navigation={navigation}/>
            </View>
        </View>
    )
}


function SocialCardsPage({ navigation }) {
    return(
        <View style={styles.scrollViewContainer}>
            <Text style={{fontSize: 24}}>Profile: <Text style={{fontWeight: "bold"}}>Pop Iulian</Text></Text>
            <Spacer/>
            <ScrollView style={{flexGrow: 5}}
                contentContainerStyle={{flexGrow: 5, justifyContent: 'center', alignItems: 'center'}}>
                <View>
                    <CardComponent name={"Social"} goTo={MyCard} navigation={navigation}/>
                    <Spacer/>
                    <CardComponent name={"Business"} goTo={MyCard} navigation={navigation}/>
                </View>
            </ScrollView>

            <View style={{flexGrow: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                <Icon
                    reverse
                    name="add-circle-outline"
                    size={40}
                    color={box_color}
                    onPress={() => navigation.navigate("CreateCard")}
                />
            </View>
        </View>
    )
}


function CreateCard({ navigation }) {
    return (
        <View style={styles.scrollViewContainer}>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <Icon
                    name='arrow-back'
                    reverse
                    color= {box_color}
                    onPress ={() => navigation.navigate("SocialCardsPage")}
                />

                <Icon
                    name='done-outline'
                    reverse
                    color= {box_color}
                    onPress ={() => navigation.navigate("SocialCardsPage")}
                />
            </View>
            <ScrollView style={{flex: 1}}>
                <View>
                    <TextBox name={"Card name"} myText={"Type your card title"}/>
                    <Spacer/>
                    <TextBox name={"Your name"} myText={"Type your name"}/>
                    <Spacer/>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Icon
                            reverse
                            name="person"
                            color={box_color}
                            onPress={() => alert("Put your photo")}
                        />
                    </View>
                </View>
            </ScrollView>

            <ScrollView style={{flex: 1}} >
                <InfoLinkComponent/>
                <Spacer/>
                <InfoLinkComponent/>
                <Spacer/>
                <InfoLinkComponent/>
                <Spacer/>
                <InfoLinkComponent/>
                <Spacer/>
            </ScrollView>
        </View>
    )
}

function MyCard() {
    return (
        <View>
            <Text>BoSSS</Text>
        </View>
    )
}


export default function App() {

    const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator>
              <Stack.Screen name={"StartPage"} component={StartPage}  options={styles.headerEdit}/>
              <Stack.Screen name={"LoginPage"} component={LoginPage} options={styles.headerEdit}/>
              <Stack.Screen name={"SignupPage"} component={SignupPage} options={styles.headerEdit}/>
              <Stack.Screen name={"SocialCardsPage"} component={SocialCardsPage} options={styles.headerEdit}/>
              <Stack.Screen name={"CreateCard"} component={CreateCard} options={styles.headerEdit}/>
              <Stack.Screen name={"MyCard"} component={MyCard} options={styles.headerEdit}/>
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

    scrollViewContainer: {
        flex: 1,
        backgroundColor: bg_color,
        padding: 15,
    },

    headerEdit: {
        headerStyle: {
            backgroundColor: header_color,
        },
        headerTintColor: text_color,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerBackVisible: false
    },

    downCard: {
        flex: 1,
        borderWidth: 5,
    },

});
