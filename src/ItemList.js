import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import ListItem from './ListItem';

import { removeTodo, toggleTodo } from './redux/actions';

class ItemList extends Component {
  renderItem = todo => (
    <ListItem
      item={todo.item}
      onRemove={this.removeItem}
      onToggle={this.toggleItem}
      toggled={todo.item.toggled}
    />
  );

  removeItem = (id) => {
    const { removeTodoItem } = this.props;
    removeTodoItem(id);
  };

  toggleItem = id => this.props.toggleTodoItem(id);

  render() {
    const { style, todos } = this.props;
    return (
      <View style={style}>
        <FlatList
          data={todos}
          renderItem={this.renderItem}
          keyExtractor={(todo, index) => `${todo.text}${index}`}
        />
      </View>
    );
  }
}

const mapStateToProps = store => ({
  todos: store.todos,
});

const mapDispatchToProps = dispatch => ({
  removeTodoItem: id => dispatch(removeTodo(id)),
  toggleTodoItem: id => dispatch(toggleTodo(id)),
});

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
