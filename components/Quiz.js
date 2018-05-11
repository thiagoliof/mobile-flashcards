import React from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import { itemDetails } from '../utils/helpers';


class Quiz extends React.Component {
    
    render() {	
		const deck = this.props.deck
		const { item } = this.props.navigation.state.params
        const details = itemDetails(deck, item.title)
		return (
			<View>
				<View><Text>1 de {details.questions.length}</Text></View>
				<View></View>
            </View>
		);
	}
}

function mapStateToProps ({ deck }) {
    return {
      deck: deck.payload
    }
  }
  
export default connect(mapStateToProps, )( Quiz )

