import React from 'react';
import { Text, View, Button } from 'react-native';


class DeckDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { entryID } = navigation.state.params
        return{
            title: `${entryID.key}`
        }
    }
    addCardPress = () => {
        const { entryID } = navigation.state.params
        this.props.navigation.navigate(
            'AddCard',
            {entryID: entryID} 
        )
    }
    starQuizPress = () => {
        console.log("starQuizPress")
    }
    // componentDidMount = () =>{
    //     console.log("deck details")
    // }
    
    render() {	
		return (
			<View>
                <View>
                    <Text>{this.props.navigation.state.params.entryID.key}</Text>
                    <Text>questions: {this.props.navigation.state.params.entryID.total}</Text>
                </View>
                <View>
                    <Button onPress={() => this.props.navigation.navigate(
                        'AddCard',
                        {entryID: this.props.navigation.state.params.entryID} 
                        )} title="add card press" />
                    <Button onPress={() => this.props.navigation.navigate(
                        'Quiz',
                        {} 
                        )} title="start quiz" />
                </View>
            </View>
		);
	}
}



export default DeckDetail

