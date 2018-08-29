import { AppRegistry, YellowBox } from 'react-native'
// import App from './src/App'
import { name as appName } from './app.json'
import Menu from './src/Menu'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

AppRegistry.registerComponent(appName, () => Menu)
