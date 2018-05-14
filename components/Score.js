import React from 'react';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import { addGame } from '../actions'

class Score extends React.Component {
	
	goHome = () => {
		this.props.navigation.dispatch(NavigationActions.reset({
			index: 0,
			key: null,
			actions: [NavigationActions.navigate({ routeName: 'Home' })]
		}))
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
				<View style={[styles.box, {top:20, }]}>
					<Text style={styles.text}> {sum } Ponto(s) </Text>
				</View>
				<View>
					<Button title="Início" onPress={() => this.goHome()}
						/>
				</View>
				<View>
					<Button 
						onPress={() => this.resetQuiz()} 
						title="Reiniciar o Quiz"
						color="#80B2C9"
						/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: 'white'
	},
	box: {
        margin: 20,
        backgroundColor: 'white'
    },
	text:{
		textAlign: 'center',
		fontSize: 20
    }
	
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

