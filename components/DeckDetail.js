import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
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
    render() {	
        const { deck } = this.props
        const { item } = this.props.navigation.state.params
        const details = itemDetails(deck, item.key)
        return (
            <View style={styles.container}>
                <View style={[styles.box, {flex: 1,}]}>
                    <Text style={[styles.text, {marginTop:70}]}>{details.title}</Text>
                    <Text style={[styles.text, {marginTop:10}]}>{details.questions.length } Cartão</Text>
                </View>
                <View style={[styles.box, {flex: 2}]}>
                    <Button onPress={() => this.props.navigation.navigate(
                         'AddCard',
                         {item: details} 
                     )} 
                     title="Adicionar"
                     color="#80B2C9"
                     />
                     {details.questions.length && <Button onPress={() => this.props.navigation.navigate(
                         'Quiz',
                         {
                             item: details, 
                             position:0,
                             corrects:0
                         } 
                         )} title="Jogar" 
                         color="#80B2C9"
                    />}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'white',
    },
    box: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'white',
    },
    text:{
        textAlign: 'center',
        fontSize: 20
    }
})

export default connect(mapStateToProps,)(DeckDetail)
