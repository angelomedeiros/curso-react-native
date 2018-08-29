import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Simples texto='Angelo Medeiros' />
        <ParImpar numero='31' />
        <Inverter texto='Angelo' />
        <MegaSena numeros={8} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  f20: {
    fontSize: 40
  }
})