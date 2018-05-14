import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { addGame } from '../actions'
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
    starQuizPress = (details) => {
        const title = details.title        
        const data = details.questions.map((obj) => {
            return { 
                question: obj.question, 
                answer: obj.answer, 
                answered:false, 
                fliped: false,
                correct: null 
            }
        })
        this.props.addGame({title, data, position:0})
        this.props.navigation.navigate(
            'Quiz',
            {} 
        )
    }
    render() {	
        const { deck } = this.props
        const { item } = this.props.navigation.state.params
        const details = itemDetails(deck, item.key)
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={[styles.text,]}>{details.title}</Text>
                    <Text style={[styles.textQtdCartao]}>{details.questions.length === 1 ? `${details.questions.length} Cartão` : `${details.questions.length} Cartões` }</Text>
                </View>
                <View style={styles.box} >
                    <Button onPress={() => this.props.navigation.navigate(
                         'AddCard',
                         {item: details} 
                     )} 
                     title="Adicionar"
                     color="#80B2C9"
                     />
                     {details.questions.length && <Button onPress={() => this.starQuizPress(details)} title="Jogar" 
                         color="#80B2C9"
                    />}
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header:{
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        flex: 2,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',

    },
    text:{
        fontSize: 50
    },
    textQtdCartao:{
        fontSize: 30
    }
})

function mapStateToProps ({ deck }) {
    return {
        deck: deck.payload
    }
}

function mapDispatchToProps (dispatch) {
	return {
		addGame: (data) => dispatch(addGame(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)
