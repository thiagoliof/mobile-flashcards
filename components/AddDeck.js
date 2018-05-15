import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, TextInput, StyleSheet, Button} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import  { saveDeckTitle , getDecks}  from '../utils/api';
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class AddDeck extends React.Component {
    state = {
        deckName: '',
        showErrorMessage: false
    }
    onPressSalvar = () =>{
        const deckName = this.state.deckName
        if(deckName.length === 0)
        {
            this.setState({
                showErrorMessage:true
            })
        }
        else{
            saveDeckTitle(deckName).then(() => {
                getDecks().then(result => {
                    this.props.addDeck(JSON.parse(result))
		            item = {key: deckName, total:0}
		            this.props.navigation.navigate('DeckDetail', { item } )

                })
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, {flex: 1}]}>
                    <FormLabel>Nome</FormLabel>
                    <FormInput onChangeText={(value) => this.setState({deckName: value})}/>
                    { this.state.showErrorMessage && <FormValidationMessage>Campo Obrigatório</FormValidationMessage> }
                </View>
                <View style={[styles.box, {flex: 2}]}>
                    <Button
                        onPress={this.onPressSalvar}
                        title="Confirmar"
                        color="#80B2C9"
                    />
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

function mapDispatchToProps (dispatch) {
    return {
        addDeck: (data) => dispatch(addDeck(data)),
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
        margin: 20,
        backgroundColor: 'white'
    },
})


export default connect(mapStateToProps, mapDispatchToProps)( AddDeck )




