import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Text, View, FlatList, StatusBar, Platform, Button } from 'react-native';
import { red, gray } from './utils/colors'
import { Constants } from 'expo'
import { StackNavigator  } from 'react-navigation';

import  Decks  from './components/Decks'
import  AddDeck  from './components/AddDeck'
import  DeckDetail  from './components/DeckDetail'
import  AddCard  from './components/AddCard'
import  Quiz  from './components/Quiz'

import reducer from './reducers'


function HeaderStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

// function Dash(){
//   return(
//     <View>
//       <Text>Dash</Text>
//     </View>
//   )
// }


const Stack = StackNavigator({
  Home: {
    screen: Decks,
    navigationOptions: ({ navigation }) => ({
      title: 'Decks',
      headerTintColor: 'red', 
      headerStyle:{
        backgroundColor: 'black'
      },
      headerRight: (
        <Button
          onPress={() => { navigation.navigate('AddDeck'); }}
          title="Add"
          color="#fff"
        />
      ),
    })
  },
  AddDeck:{
    screen: AddDeck,
    navigationOptions: ({ navigation }) => ({
      title : 'add deck',
      headerStyle:{
        backgroundColor: 'black'
      },
    })
  },
  DeckDetail:{
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'red', 
      headerStyle:{
        backgroundColor: 'black'
      },
    })
  },
  AddCard:{
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Card',
      headerTintColor: 'red', 
      headerStyle:{
        backgroundColor: 'black'
      },
    })
  },
  Quiz:{
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'red', 
      headerStyle:{
        backgroundColor: 'black'
      },
    })
  }

})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends React.Component {
  render() { 
    return (
        <Provider store={store} >
          <View style={{flex: 1}}>
            <HeaderStatusBar backgroundColor={gray} barStyle="light-content" />
            <Stack></Stack>
          </View>
        </Provider>
    );
  }
}

export default App

