import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { getDeckMetaInfo, itemDetails } from '../utils/helpers';
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
					{entryID: item.key} 
				)}
				rightIcon={{name: 'create'}}
				/>
		</View>
	  );

	componentDidMount(){
		getDecks().then(result => {
			this.setState({
				result: JSON.parse(result)
			})
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
		const metaInfo = this.state.result
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

export default Decks

