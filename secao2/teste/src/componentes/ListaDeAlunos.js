import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
  { id: 0, nome: 'Angelo', nota: '7.7' },
  { id: 1, nome: 'Thalita', nota: '9.6' },
  { id: 2, nome: 'João', nota: '5.6' },
  { id: 3, nome: 'Maria', nota: '6.9' },
  { id: 4, nome: 'Maria', nota: '6.9' },
  { id: 5, nome: 'Maria', nota: '6.9' },
  { id: 6, nome: 'Maria', nota: '6.9' },
  { id: 7, nome: 'Maria', nota: '6.9' },
  { id: 8, nome: 'Maria', nota: '6.9' },
  { id: 9, nome: 'Maria', nota: '6.9' },
  { id: 10, nome: 'Angelo', nota: '7.7' },
  { id: 11, nome: 'Thalita', nota: '9.6' },
  { id: 12, nome: 'João', nota: '5.6' },
  { id: 13, nome: 'Maria', nota: '6.9' },
  { id: 14, nome: 'Maria', nota: '6.9' },
  { id: 15, nome: 'Maria', nota: '6.9' },
  { id: 16, nome: 'Maria', nota: '6.9' },
  { id: 17, nome: 'Maria', nota: '6.9' },
  { id: 18, nome: 'Maria', nota: '6.9' },
  { id: 19, nome: 'Maria', nota: '6.9' }
]

const itemEstilo = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: '#DDD',
  borderWidth: 0.5,
  borderColor: 'red',

  flexDirection: 'row',
  // justifyContent: 'center', 
  justifyContent: 'space-between',
  // justifyContent: 'space-around',
  alignItems: 'center',
}

export const Aluno = props => (
  <View style={itemEstilo}>
    <Text> Nome: {props.nome} </Text>
    <Text style={{ fontWeight: 'bold' }}> Nota: {props.nota} </Text>
  </View>
)

export default props => {
  const renderItem = ({item}) => {
    return <Aluno {...item} />
  }

  return (
    <ScrollView>
      <FlatList
        data={alunos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()} />
    </ScrollView>
  )

}

