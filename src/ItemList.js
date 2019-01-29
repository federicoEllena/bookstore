import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class ItemList extends Component {
  renderItem = (todo) => {
    const { text, id } = todo.item;
    return <ListItem itemText={text} onRemove={this.removeItem(id)}/>
  };
  
  removeItem = (id) => () => this.props.removeTodo(id);

  render() {
    return (
      <FlatList
        data={this.props.todos}
        renderItem={this.renderItem}
        keyExtractor={(todo)=>`${todo.id}`}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    todos: store.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => dispatch(removeTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

/* esto deberia:
renderizar una flatlist en pantalla
tomar el array de todos del store de redux
ejecutar renderListItem para cada objeto
al hacerlo renderizara un componente texto en pantalla por cada uno
asignara el ID de cada todo a cada elemento renderizado
con keyExtractor */

/*NOTA IMPORTANTE: renderItem va a ser llamada con 1 solo elemento
de los contenidos en data a la vez
keyExtractor necesita un string, aparentemente, por lo que keyExtractor={(todo)=>`${todo.id}`}
*/

