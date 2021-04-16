import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import api from './src/services/api'
import Produtos from './src/components/Produtos'
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
     produtos: []
    }
  }

  async componentDidMount() {
    const response = await api.get('items');
    this.setState({
      produtos: response.data
    })
  }

  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supermarket WOW</Text>
      <FlatList
        data={this.state.produtos}
        keyExtractor={item => item.id.toString()}
        renderItem={ ({item}) => <Produtos data={item} />}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD',
  },
  title: {
    fontSize: 32,
    color: "#FFFF",
    fontWeight: 600,
  }
});
