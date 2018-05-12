import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, TextInput, Button, StyleSheet} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import  { addCardToDeck, getDecks }  from '../utils/api';
import { addDeck } from '../actions'
import { connect } from 'react-redux'


class AddCard extends React.Component {

	state = { 
		cardQuestion: '', 
		cardResp: '', 
		showErrorMessageQuestion: '',
		showErrorMessageAnswer: ''
	}
	onPressSalvar = () => {
		if(this.state.cardQuestion.length === 0 || this.state.cardResp.length === 0){
			if(this.state.cardQuestion.length === 0){
				this.setState({showErrorMessageQuestion: true})
			}
			if(this.state.cardResp.length === 0){
				this.setState({showErrorMessageAnswer: true})
			}
		}
		else {
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
	}
	render() {	
		return (
			<View style={styles.container}>
                <View style={[styles.box]}>
                    <FormLabel>Pergunta</FormLabel>
                    <FormInput onChangeText={(value) => this.setState({cardQuestion: value})}/>
                    { this.state.showErrorMessageQuestion && <FormValidationMessage>Campo Obrigatório</FormValidationMessage> }
                </View>
				<View style={[styles.box]}>
                    <FormLabel>Resposta</FormLabel>
                    <FormInput onChangeText={(value) => this.setState({cardResp: value})}/>
                    { this.state.showErrorMessageAnswer && <FormValidationMessage>Campo Obrigatório</FormValidationMessage> }
                </View>
                <View style={[styles.box]}>
                    <Button
                        onPress={this.onPressSalvar}
                        title="Confirmar"
                        color="#80B2C9"
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'white',
    },
    box: {
        margin: 20,
        backgroundColor: 'white'
    },
})

export default connect(mapStateToProps, mapDispatchToProps)( AddCard )

