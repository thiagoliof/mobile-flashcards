import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { itemDetails } from '../utils/helpers';
import  { getDecks }  from '../utils/api';


class Decks extends React.Component {
	state = { result: '' }
	renderItem = ({ item }) => (
		<View>
			<ListItem noBorder
				title={item.key} 
				subtitle={`${item.total} cards`} 
				onPress={() => this.props.navigation.navigate(
					'DeckDetail',
					{item: item} 
				)}
				rightIcon={{name: 'chevron-right'}}
			/>
		</View>
	);
	componentDidMount(){
		getDecks().then(result => {
			this.props.addDeck(JSON.parse(result))
		})
	}
	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					backgroundColor: "#CED0CE",
				}}
			/>
		);
	};
	render() {
		const metaInfo = this.props.deck
		const data = metaInfo ? Object.keys(metaInfo).map((key) => {
			const details = itemDetails(metaInfo, key)
			return {key: key, total: details.questions ? details.questions.length : 0 }
		}):[]
		return (
			<FlatList
				style={{ marginTop: 0 }}
				contentContainerStyle={styles.list}
				data={data}
				renderItem={this.renderItem}
				keyExtractor={item => item.key}
				ItemSeparatorComponent={this.renderSeparator}
			/>
		);
	}
}
const styles = StyleSheet.create({
	list: {
		paddingHorizontal: 0,
	},
	listItem: {
		backgroundColor: '#000',
		marginTop: 10,
		padding: 30,
		color:'#fff',
	},
});
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
export default connect(mapStateToProps,mapDispatchToProps)(Decks)



