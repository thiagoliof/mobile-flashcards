import React from 'react';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';

class Score extends React.Component {
	
	reset(){
		this.props.navigation.dispatch(NavigationActions.reset({
			index: 0,
			key: null,
			actions: [NavigationActions.navigate({ routeName: 'Home' })]
		}))
	}
	render() {	
		const { corrects } = this.props.navigation.state.params
		return (
			<View style={styles.container}>
				<View style={[styles.box, {top:20, }]}>
					<Text style={styles.text}>{corrects} Ponto(s) </Text>
				</View>
				<View>
					<Button title="Início" onPress={() => this.reset()}
						/>
				</View>
				<View>
					<Button onPress={() => this.props.navigation.navigate(
							'Quiz'
						)} 
						title="Reiniciar o Quiz"
						color="#80B2C9"
						/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: 'white'
	},
	box: {
        margin: 20,
        backgroundColor: 'white'
    },
	text:{
		textAlign: 'center',
		fontSize: 20
    }
	
});

export default Score

