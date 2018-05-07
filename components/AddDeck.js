import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, TextInput, Button, StyleSheet} from 'react-native';
import  {saveDeckTitle, setDecksData, getDecks, removeDeck}  from '../utils/api';



const resetAction = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
        NavigationActions.navigate({routeName: 'Home'})
    ]
});


class AddDeck extends React.Component {

  state = {
      deckName: ''
  }
  
  onPressSalvar = () =>{
    const deckName = this.state.deckName
    saveDeckTitle(deckName).then(()=>{
        this.props.navigation.dispatch(resetAction);
    })
  }

  render() {
    return (
      <View>
          <View>
            <TextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={(value) => this.setState({deckName: value})}
                value={this.state.deckName}/>
          </View>
          <View>
            <Button
                onPress={this.onPressSalvar}
                title="salvar"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
          </View>
      </View>
    );
  }
}

export default AddDeck

