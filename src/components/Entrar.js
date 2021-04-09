import React, { Component } from "react";
import { StyleSheet, View, Button, Modal, Text } from "react-native";

export default class Entrar extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#292929",
          width: "100%",
          height: 350,
          borderRadius: 15,
          padding: 20,
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 28,
          }}
        >
          Informacoes sobre o aplicativo.
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#FFF",
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          Lorem Ipsum
        </Text>
        <Button title="Sair" onPress={this.props.fechar} />
      </View>
    );
  }
}
