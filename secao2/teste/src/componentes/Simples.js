import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo/Estilo'

export default props => [
  <Text style={[Estilo.ex]} key={1}>Olá...</Text>,
  <Text key={2}>{props.texto}</Text>
]