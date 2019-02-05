import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native';

import { storeBookData } from '../redux/actions';
import BookItem from '../BookItem';
import Spinner from '../common/Spinner';


class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataIsLoaded: null,
    };
  }

  componentDidMount() {
    fetch('https://private-a61343-bookstore23.apiary-mock.com/books')
      .then((data) => {
        const responseData = JSON.parse(data._bodyText);
        this.storeBookData(responseData);
        this.setState({ dataIsLoaded: true });
      });
  }

  storeBookData = (responseData) => {
    this.props.dispatch(storeBookData(responseData));
  };

  renderItem = book => (
    <BookItem item={book.item} onPress={() => this.navigateToDetails(book.item)} />
  );

  navigateToDetails = book => this.props.navigation.navigate({ routeName: 'Details', params: { book } });

  render() {
    const { books } = this.props;

    if (!this.state.dataIsLoaded) {
      return (<Spinner />);
    }

    return (
      <FlatList
        data={books}
        renderItem={this.renderItem}
        keyExtractor={(book, index) => `${book.title}${index}`}
      />
    );
  }
}

const mapStateToProps = store => ({
  books: store.books.books,
});


export default connect(mapStateToProps)(Booklist);
