import React from 'react'
import { View, Text } from 'react-native'

import Padrao from '../estilo/Padrao'
import If from './utils/if'

export default props => (
  <View>
    <If test={props.numero % 2 === 0}>
      <Text style={Padrao.ex}>Par</Text>
    </If>
    <If test={props.numero % 2 !== 0}>
      <Text style={Padrao.ex}>Ímpar</Text>
    </If>
  </View>
)