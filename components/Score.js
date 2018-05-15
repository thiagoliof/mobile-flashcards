import React from 'react';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import { addGame } from '../actions'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';

class Score extends React.Component {
	
	componentDidMount(){
		clearLocalNotification()
			.then(setLocalNotification)
	}

	goDeck = () => {
		const game = this.props.game
		item = {key: game.title, total:game.data.length}
		this.props.navigation.navigate('DeckDetail', { item } )
	}

	resetQuiz = () => {
	
		const game = this.props.game
		const data = game.data.map((obj) => {
			return {
				question: obj.question, 
				answer: obj.answer,
				answered: false, 
				fliped:false,
				correct: null
			}
		})	

		this.props.addGame({title:game.title, data, position:0})
		this.props.navigation.goBack()
	}



	render() {	
		const game = this.props.game
		const sum = game.data.reduce(( prevVal, elem ) => {
			return prevVal + (elem.correct === true? 1 : 0)
		}, 0 );
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.text}> {sum} Ponto(s) </Text>
				</View>
				<View style={styles.box}>
					<Button 
						onPress={() => this.resetQuiz()} 
						title="Reiniciar o Quiz"
						color="#80B2C9"
						/>

					<Button title="Voltar ao baralho" color="#80B2C9" onPress={() => this.goDeck()}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header:{
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        flex: 2,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',

    },
    text:{
        fontSize: 50
    },
});

function mapStateToProps ({ game }) {
	return {
		game: game.payload
	}
}

function mapDispatchToProps (dispatch) {
	return {
		addGame: (data) => dispatch(addGame(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)

