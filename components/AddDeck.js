import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, TextInput, Button, StyleSheet} from 'react-native';
import  { saveDeckTitle , getDecks}  from '../utils/api';
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class AddDeck extends React.Component {
  state = {
      deckName: ''
  }
  onPressSalvar = () =>{
    const deckName = this.state.deckName
    saveDeckTitle(deckName).then(() => {
      getDecks().then(result => {
        
        this.props.addDeck(JSON.parse(result))
				this.props.navigation.goBack() 
			})
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

function mapStateToProps ({ deck }) {
    return {
      deck: deck.payload
    }
  }
  
  function mapDispatchToProps (dispatch) {
	  return {
	      addDeck: (data) => dispatch(addDeck(data)),
	    }
  }


export default connect(mapStateToProps, mapDispatchToProps)( AddDeck )
  
  


