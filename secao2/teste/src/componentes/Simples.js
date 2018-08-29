import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

export default props => [
  <Text style={[Padrao.ex]} key={1}>Olá...</Text>,
  <Text key={2}>{props.texto}</Text>
]