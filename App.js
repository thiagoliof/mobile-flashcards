import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { Text, View, FlatList, StatusBar, Platform } from 'react-native';
import { red } from './utils/colors'
import { Constants } from 'expo'
import { TabNavigator  } from 'react-navigation';

import  ListItem  from './components/ListItem'


function HeaderStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
class App extends React.Component {
  render() {
   
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <HeaderStatusBar backgroundColor={red} barStyle="light-content" />
          <ListItem />
        </View>
      </Provider>
    );
  }
}

export default App

