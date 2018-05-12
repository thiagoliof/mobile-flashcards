import React from 'react';
import { connect } from 'react-redux'
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { itemDetails } from '../utils/helpers';
import FlipCard from 'react-native-flip-card'
import  { purple, red }  from '../utils/colors';

class Quiz extends React.Component {
	render() {	
		const deck = this.props.deck
		const { item } = this.props.navigation.state.params
		const details = itemDetails(deck, item.title)
		return (
			<View style={styles.container}>
				<View style={[styles.box, {top:20, flex:1}]}>
					<Text>1 de {details.questions.length}</Text>
				</View>
				<View style={[styles.box, {flex: 5}]}>
					<FlipCard 
						style={styles.card}
						friction={6}
						perspective={1000}
						flipHorizontal={true}
						flipVertical={false}
						flip={false}
						clickable={true}
						alignWidth={true}
						onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
					>
						{/* Face Side */}
						<View style={styles.face}>
							<Text>The asdasdasdsFace</Text>
						</View>
						{/* Back Side */}
						<View style={styles.back}>
							<Text>The s</Text>
						</View>
					</FlipCard> 
				</View>
			</View>
		);
	}
}

const width = Dimensions.get('window').width - 30
const height = Dimensions.get('window').height - 300

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
		borderColor:'transparent'
	},
	face: {
		backgroundColor:'#3D87A3',
		height
	},
	back: {
		backgroundColor:'#DFEDF4',
		height
	},
	box: {
        margin: 20,
        backgroundColor: 'white'
    },
	
});

function mapStateToProps ({ deck }) {
	return {
		deck: deck.payload
	}
}

export default connect(mapStateToProps, )( Quiz )

