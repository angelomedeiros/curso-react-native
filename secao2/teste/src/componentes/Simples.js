import React from 'react'
import { Text } from 'react-native'

export default props => [
  <Text key={1}>{props.texto}</Text>,
  <Text key={2}>{props.texto}</Text>
]