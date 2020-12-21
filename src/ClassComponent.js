import React from 'react';
import {Text} from 'react-native';

const getName = (firstName, lastName) => {
    return firstName + " " + lastName;
  }
//un composant de classe
class ClassComponent extends React.Component{
    render( props ){
        return(
        <>
            <Text>Bonsoir les potos !</Text>
            <Text>Une seconde ligne</Text>
            <Text>My name is {getName('Claude',this.props.name)}</Text>
        </>
        )
    }
}
export default ClassComponent;