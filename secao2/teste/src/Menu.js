import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'

export default createDrawerNavigator({
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