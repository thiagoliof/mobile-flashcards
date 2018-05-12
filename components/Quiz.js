import React from 'react';
import { connect } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native';
import { itemDetails } from '../utils/helpers';

import FlipCard from 'react-native-flip-card'


class Quiz extends React.Component {
    
    render() {	
		const deck = this.props.deck
		const { item } = this.props.navigation.state.params
        const details = itemDetails(deck, item.title)
		return (
			<View style={styles.container}>
				<View><Text>1 de {details.questions.length}</Text></View>
				<FlipCard 
					style={styles.flipCard}
					friction={6}
					perspective={1000}
					flipHorizontal={false}
					flipVertical={true}
					flip={true}
					clickable={true}
					onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
					>
					{/* Face Side */}
					<View >
						<Text>The Face</Text>
					</View>
					{/* Back Side */}
					<View>
						<Text>The Back</Text>
					</View>
					</FlipCard>
			</View>
							);
		}
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: "center",
	  justifyContent: "center",
	},
	flipCard: {
	  width: 500,
	  height: 500,
	  alignItems: 'center',
	  justifyContent: 'center',
	  backgroundColor: 'blue',
	  backfaceVisibility: 'hidden',
	},
	flipCardBack: {
	  backgroundColor: "red",
	  position: "absolute",
	  top: 0,
	},
	flipText: {
	  width: 90,
	  fontSize: 20,
	  color: 'white',
	  fontWeight: 'bold',
	}
  });

function mapStateToProps ({ deck }) {
    return {
      deck: deck.payload
    }
  }
  
export default connect(mapStateToProps, )( Quiz )

