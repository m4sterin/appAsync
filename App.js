import React, { Component } from 'react';
import { StyleSheet, View, Button, Modal, Text} from 'react-native';
import Entrar from './src/components/Entrar';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      modalVisible: false
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }
  entrar() {
    this.setState({modalVisible: true})
  }

  sair(visible) {
    this.setState({modalVisible: vivsible})
  }

  render(){
  return (
    <View style={styles.container}>
      <Button title="Entrar" onPress={this.entrar} />
      <Modal
        animationType="fade"
        visible={this.state.modalVisible}
        transparent={true}
      >
        <View
          style={{
            margin: 15,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Entrar fechar={() => this.sair(false)} />
        </View>
      </Modal>
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
});
