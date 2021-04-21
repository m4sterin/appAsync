import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class Produtos extends Component {
    constructor(props){
        super(props);
        this.state = { 
         cor: ''
        }
      }

  render() {
    let imagem = this.props.data.image;

    if(this.props.data.category == "Não Perecível"){
        this.setState.cor = 'blue'
    }
    else{
        this.setState.cor = 'orange'
    }

    return (
      <View style={styles.item}>
        <View>
          <Image style={{ width: 200, height: 200,  }} source={{ uri: imagem }} />
        </View>
        <View style={styles.a1}>
          <Text style={styles.title}>{this.props.data.description}</Text>
          <View style={styles.alinhamento}>
            <Text style={{ width: 90, backgroundColor: 'this.state.cor' }}>{this.props.data.category}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  alinhamento: {
    flex: 1,
  },
  a1: {
    flex: 1,
    alignItems: "flex-end",
  },
  item: {
    backgroundColor: "gray",
    flex: 1,
    width: 340,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 25,
    alignItems: ''
  },
  textos: {
    color: "#FFFF",
    padding: 5,
    marginRight: 5,
  },
  title: {
    fontSize: 32,
    color: "#FFFF",
    fontWeight: 600,
  },
  imagens: {
    width: 50,
    height: 50,
  },
});
