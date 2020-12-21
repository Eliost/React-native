import React from 'react';
import {Text} from 'react-native';

//Un composant fonctionnel
const FunctionComponent = () => {
    //Variable utilisée dans le code JSX
    const name = 'CDA';
    return(
      <Text>My first function component : {name}</Text>
      )
  }

  export default FunctionComponent;