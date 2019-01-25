import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';
import ListItem from './ListItem';

class ItemList extends Component {
  renderItem = (todo) => {
    return <ListItem>{todo}</ListItem>
  };
  
  render() {
    return (
      <FlatList
        data={this.props.todos}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: store.todos
  };
};

export default connect(mapStateToProps)(ItemList);

/* esto deberia:
renderizar una flatlist en pantalla
tomar el array de todos del store de redux
ejecutar renderListItem para cada objeto
al hacerlo renderizara un componente texto en pantalla por cada uno
asignara el ID de cada todo a cada elemento renderizado
con keyExtractor */
