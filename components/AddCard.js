import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, TextInput, Button} from 'react-native';
import  { addCardToDeck, getDecks }  from '../utils/api';
import { addDeck } from '../actions'
import { connect } from 'react-redux'


class AddCard extends React.Component {
	
	state = { cardQuestion: '', cardResp: '' }

	onPressSalvar = () => {
		const card = {question: this.state.cardQuestion, answer:this.state.cardResp }
		const { title, questions } = this.props.navigation.state.params.item
		questions.push(card)
		addCardToDeck(title, questions).then((result)=> {
			getDecks().then(result => {
				this.props.addDeck(JSON.parse(result))
				this.props.navigation.goBack() 
			})
		})
	}

    render() {	
		return (
			<View>
                <TextInput
        			style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        			onChangeText={(text) => this.setState({cardQuestion: text})}
        			value={this.state.cardQuestion} />

				<TextInput
        			style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        			onChangeText={(text) => this.setState({cardResp: text})}
        			value={this.state.cardResp} />

				<Button
                	onPress={this.onPressSalvar}
                	title="salvar"
                	color="#841584"
                	accessibilityLabel="Learn more about this purple button"
            	/>
				<Text></Text>
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


export default connect(mapStateToProps, mapDispatchToProps)( AddCard )

