import React from 'react';
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import { itemDetails } from '../utils/helpers';
import FlipCard from 'react-native-flip-card'
import  { purple, red }  from '../utils/colors';
import { addGame } from '../actions'


class Quiz extends React.Component {

	state = { 
		flip: false, 
	}
	onPressResposta = () =>{
		const game = this.props.game
		const title = game.title
		const { position } = game
		game.data[position].fliped = true
		const data = game.data
		this.props.addGame({title: game.title, data, position})
	}
	onPressCount = (plus) => {
		const game = this.props.game
		const { position } = game
		game.data[position].correct = plus === 1 ? true: false
		game.data[position].answered = true		
		if(position + 1 < game.data.length){
			game.position = position + 1
			this.props.addGame({title: game.title, data:game.data, position:game.position})
		}
		else{
			this.props.addGame({title: game.title, data:game.data, position:game.position})
			this.props.navigation.navigate(
				'Score',{}
			)
		}
	} 
	render() {	
		const game = this.props.game
		const { position, data, fliped } = game
		const obj = data[position]
		return (
			<View style={styles.container}>
				<View style={[styles.box, {top:20, flex:1}]}>
					<Text>{position + 1} de {data.length}</Text>
				</View>
				<View style={[styles.box, {flex: 5}]}>
					<FlipCard 
						style={styles.card}
						friction={6}
						perspective={1000}
						flipHorizontal={true}
						flipVertical={false}
						flip={obj.fliped}
						clickable={false}
						alignWidth={true}
						onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
					>
						{/* Face Side */}
						<View style={styles.face}>
							<Text style={styles.text}>
								{obj.question}
							</Text>
							<Button onPress={() => this.onPressResposta()}
									title="ver Resposta" 
									color="#80B2C9" />
						</View>
						{/* Back Side */}
						<View style={styles.back}>
							<Text style={styles.text}>
								{obj.answer}
							</Text>	
							<View>
								<Button onPress={() => this.onPressCount(1)}
									title="Acertei" 
									color="#80B2C9" />
								
								<Button onPress={() =>this.onPressCount(0)}
									title="Errei" 
									color="#80B2C9" />
							</View>
						</View>
					</FlipCard> 
				</View>
			</View>
		);
	}
}

const width = Dimensions.get('window').width - 30
const height = Dimensions.get('window').height - 250

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: 'white'
	},
	card:{
		top:0,
		width,
		borderColor:'transparent',
	},
	face: {
		backgroundColor:'#DFEDF4',
		height,
		borderRadius: 25
	},
	back: {
		backgroundColor:'#e8d5b5',
		height,
		borderRadius: 25
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

function mapStateToProps ({ deck, game }) {
	return {
		deck: deck.payload,
		game: game.payload
	}
}

function mapDispatchToProps (dispatch) {
	return {
		addGame: (data) => dispatch(addGame(data)),
	}
}
export default connect(mapStateToProps,mapDispatchToProps)( Quiz )

