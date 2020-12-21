import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,Button, Text, View, Image, ScrollView } from 'react-native';
import ClassComponent from "./src/ClassComponent";
import FunctionComponent from './src/FunctionComponent';
import Components from "./src/JSXComponents";

// composant avec Image
const MyImage = () => {
  return (
    <View>
      <Image source={require('./assets/logo_expo_react.png')}
            style={{width:200, height:200}}></Image>
      <Image source={require('./assets/logo_expo_react.png')}
      style={{width:200, height:200}}></Image>
    </View>
  )
}

// composant avec des props 
const PropsComponent = (props) => {
  return <Text> Coucou je suis { props.name } </Text>
}

// composant de classe avec State
class StateComponent extends React.Component{
  constructor(){
    super();
    this.state = {
      name: 'Personne'
    }
  }
  render() {
    return (
      <View>
        <Text>Coucou ceci est une valeur du State : { this.state.name }</Text>
        <Button
          onPress={ () => { this.setState({ name: "Moi" }) } }
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

// composant fonctionnel avc State
const FunctStateComponent = () => {
// déclaration de State avec Hook useState()
const {name, setName} = useState('Personne');
  return (
    <View>
      <Text>Coucou ceci est une valeur du State : { name }</Text>
        <Button
          onPress={ () => { setName('Moi')} }
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
    </View>
  )
}

export default function App() {
  return (
    //Ici on appele nos différents composants
    <ScrollView>
      <View style={styles.container}>
        <Text>Hello this is my first App</Text>
        <ClassComponent name="Dévi"></ClassComponent>
        <StateComponent></StateComponent>
        <FunctionComponent></FunctionComponent>
        <FunctStateComponent></FunctStateComponent>
        <Components.JsxOne></Components.JsxOne>
        <Components.JsxTwo></Components.JsxTwo>
        <PropsComponent name="Dekpo"></PropsComponent>
        <MyImage></MyImage>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
