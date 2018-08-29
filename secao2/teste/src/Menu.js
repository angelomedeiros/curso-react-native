import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'

export default createDrawerNavigator({
  ValidarProps: {
    screen: () => <ValidarProps ano={18} label='Teste: ' />
  },
  Plataformas: {
    screen: Plataformas
  },
  Contador: {
    screen: () => <Contador numeroInicial={200}/>
  },
  MegaSena: {
    screen: () => <MegaSena numeros={7}/>,
    navigatorOptions: { title: 'Mega Sena' }
  },
  Inverter: {
    screen: () => <Inverter texto='Angelo Medeiros'/>
  },
  ParImpar: {
    screen: () => <ParImpar numero={30} />,
    navigatorOptions: { title: 'Par ou ímpar' }
  },
  Simples: {
    screen: () => <Simples texto='Angelo Medeiros' />
  }
}, { drawerWidth: 300 })