import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

class ItemList extends Component {
  
  render() {
    return <Text>I'm a placeholder!</Text>;
  }
}

export default ItemList;

/* esto deberia:
renderizar una flatlist en pantalla
tomar el array de objetos de dumbtodolist en la prop data
ejecutar renderListItem para cada objeto
al hacerlo renderizara un componente texto en pantalla por cada uno
asignara el ID de cada todo a cada elemento renderizado
con keyExtractor */
