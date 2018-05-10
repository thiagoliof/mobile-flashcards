import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, TextInput, Button} from 'react-native';
import  { addCardToDeck }  from '../utils/api';

// const resetAction = NavigationActions.reset({
//     index: 1,
//     key: null,
//     actions: [
//         NavigationActions.navigate({routeName: 'DeckDetail', })
//     ]
// }); 

class AddCard extends React.Component {
	state = { cardQuestion: '', cardResp: '' }

	onPressSalvar = () => {
		const card = {question: this.state.cardQuestion, answer:this.state.cardResp }
		addCardToDeck(this.props.navigation.state.params.entryID.key, card)
		//this.props.navigation.state.params.DeckDetail.starQuizPress();
		this.props.navigation.goBack(null)
	}

	
    render() {	
		return (
			<View>
                <TextInput
        			style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        			onChangeText={(text) => this.setState({cardQuestion: text})}
        			value={this.state.cardQuestion} />

				<TextInput
        			style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        			onChangeText={(text) => this.setState({cardResp: text})}
        			value={this.state.cardResp} />

				<Button
                	onPress={this.onPressSalvar}
                	title="salvar"
                	color="#841584"
                	accessibilityLabel="Learn more about this purple button"
            	/>
				<Text></Text>
            </View>
		);
	}
}



export default AddCard

