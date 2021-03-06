import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Text, View, FlatList, StatusBar, Platform, Button, StyleSheet } from 'react-native';
import { red, gray } from './utils/colors'
import { Constants } from 'expo'
import { StackNavigator, TabNavigator  } from 'react-navigation';
import { EvilIcons } from '@expo/vector-icons';
import  Decks  from './components/Decks'
import  AddDeck  from './components/AddDeck'
import  DeckDetail  from './components/DeckDetail'
import  AddCard  from './components/AddCard'
import  Quiz  from './components/Quiz'
import  Score  from './components/Score'
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers';


function HeaderStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Stack = StackNavigator({
    Home: {
        screen: Decks,
        navigationOptions: ({ navigation }) => ({
            title: 'Baralhos',
            headerTintColor: 'white', 
            headerStyle:{
                backgroundColor: '#391E64'
            },
            headerRight: (
                <EvilIcons 
                    name="plus" 
                    size={32} 
                    color="white"
                    style={{marginRight:10}}
                    onPress={() => { navigation.navigate('AddDeck')}}
                />
            ),
        })
    },
    AddDeck:{
        screen: AddDeck,
        navigationOptions: ({ navigation }) => ({
            title: 'Criar Baralho',      
            headerTintColor: 'white', 
            headerStyle:{
                backgroundColor: '#391E64'
            },
        })
    },
    DeckDetail:{
        screen: DeckDetail,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: 'white', 
            headerStyle:{
                backgroundColor: '#391E64'
            },
        })
    },
    AddCard:{
        screen: AddCard,
        navigationOptions: ({ navigation }) => ({
            title: 'Adicionar Cartão',
            headerTintColor: 'white', 
            headerStyle:{
                backgroundColor: '#391E64'
            },
        })
    },
    Quiz:{
        screen: Quiz,
            navigationOptions: ({ navigation }) => ({
                headerTintColor: 'white', 
                headerStyle:{
                    backgroundColor: '#391E64'
                },
            })
    },
    Score:{
        screen: Score,
            navigationOptions: ({ navigation }) => ({
                title: 'Pontos',
                headerTintColor: 'white', 
                headerStyle:{
                    backgroundColor: '#391E64'
                },
            })
    }
})
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
class App extends React.Component {
    componentDidMount(){
        setLocalNotification()
    }
    render() { 
        return (
            <Provider store={store} >
                <View style={styles.container}>
                    <HeaderStatusBar backgroundColor={'#391E64'} barStyle="light-content" />
                    <Stack></Stack>
                </View>
            </Provider>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default App

