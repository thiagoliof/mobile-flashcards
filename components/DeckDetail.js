import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import { itemDetails } from '../utils/helpers';


class DeckDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { item } = navigation.state.params
        return{
            title: `${item.key}`
        }
    }
    addCardPress = () => {
        const { item } = navigation.state.params
        this.props.navigation.navigate(
            'AddCard',
            {item: item} 
        )
    }
    starQuizPress = () => {
        console.log("starQuizPress")
    }
    // componentDidMount = () =>{
    //     console.log("deck details")
    // }
    
    render() {	
        const { deck } = this.props
        const { item } = this.props.navigation.state.params
        const details = itemDetails(deck, item.key)

        return (
			<View>
                <View>
                    <Text>{details.title}</Text>
                    <Text>questions: {details.questions.length }</Text>
                </View>
                <View>
                    <Button onPress={() => this.props.navigation.navigate(
                        'AddCard',
                        {item: details} 
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


function mapStateToProps ({ deck }) {
    return {
      deck: deck.payload
    }
  }

  
export default connect(mapStateToProps,)(DeckDetail)
