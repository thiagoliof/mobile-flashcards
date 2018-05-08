import React from 'react';
import { Text, View } from 'react-native';


class DeckDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { entryID } = navigation.state.params
        return{
            title: `entryID`
        }
    }
    render() {	
		return (
			<View>
                <Text>{this.props.navigation.state.params.entryID.key}</Text>
                <Text>questions: {this.props.navigation.state.params.entryID.total}</Text>
            </View>
		);
	}
}



export default DeckDetail

