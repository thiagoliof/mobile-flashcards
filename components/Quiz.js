import React from 'react';
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import { itemDetails } from '../utils/helpers';
import FlipCard from 'react-native-flip-card'
import  { purple, red }  from '../utils/colors';

class Quiz extends React.Component {

	state = { 
		flip: false, 
	}

	onPressResposta = () =>{
		this.setState({
			flip:true
		})
	}
	
	onPressCount = (plus) => {
		const deck = this.props.deck
		const { item, position, corrects } = this.props.navigation.state.params
		const _corrects = corrects + (plus)
		const details = itemDetails(deck, item.title)
		if(position + 1 < details.questions.length){
			this.props.navigation.navigate(
				'Quiz',
				{
					item: details, 
					position:(position + 1),
					corrects:_corrects
				} 
			)
		}
		else{
			this.props.navigation.navigate(
				'Score',{
					corrects:_corrects
				}
			)
		}
	} 
	

	render() {	
		const deck = this.props.deck
		const { item, position } = this.props.navigation.state.params
		const details = itemDetails(deck, item.title)
		const question = details.questions[position].question
		const answer = details.questions[position].answer
		return (
			<View style={styles.container}>
				<View style={[styles.box, {top:20, flex:1}]}>
					<Text>{position + 1} de {details.questions.length}</Text>
				</View>
				<View style={[styles.box, {flex: 5}]}>
					<FlipCard 
						style={styles.card}
						friction={6}
						perspective={1000}
						flipHorizontal={true}
						flipVertical={false}
						flip={this.state.flip}
						clickable={false}
						alignWidth={true}
						onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
					>
						{/* Face Side */}
						<View style={styles.face}>
							<Text style={styles.text}>
								{question}
							</Text>
							<Button onPress={() => this.onPressResposta()}
									title="ver Resposta" 
									color="#80B2C9" />
						</View>
						{/* Back Side */}
						<View style={styles.back}>
							<Text style={styles.text}>
								{answer}
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

function mapStateToProps ({ deck }) {
	return {
		deck: deck.payload
	}
}

export default connect(mapStateToProps, )( Quiz )

