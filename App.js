import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator} from 'react-native';
import api from './src/services/api'
import Produtos from './src/components/Produtos'
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
     produtos: [],
     loading: true
    }
  }

  async componentDidMount() {
    const response = await api.get('items');
    this.setState({
      produtos: response.data,
      loading: false
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <ActivityIndicator color='#3398F1' size={40}/>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.produtos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Produtos data={item} />}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.produtos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Produtos data={item} />}
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
  }
});
