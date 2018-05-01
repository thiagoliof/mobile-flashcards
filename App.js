import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import { getDeckMetaInfo } from './utils/helpers';
import { purple, white, red } from './utils/colors'
import { Constants } from 'expo'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


class App extends React.Component {
  render() {
    const metaInfo = getDeckMetaInfo()
    const data = Object.keys(metaInfo).map((key) => {
      return {key: key}
    })
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={red} barStyle="light-content" />
        </View>
      </Provider>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,249,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
