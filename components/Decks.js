import React from 'react';
import { Text, View, FlatList, TextInput} from 'react-native';
import { getDeckMetaInfo, itemDetails } from '../utils/helpers';
import  {getDecks, getDeck, setDecksData, saveDeckTitle}  from '../utils/api';


class Decks extends React.Component {
  
  state = {result:''}
  
  componentDidMount(){
   
    getDecks().then(result => {
       this.setState({
         result: JSON.parse(result)
       })
    })

  }

  render() {
     const metaInfo = this.state.result
     const data = Object.keys(metaInfo).map((key) => {
     const details = itemDetails(metaInfo, key)
      return {key: key, total: details.questions ? details.questions.length : 0 }
  })

    return (
      <View>
          {/* <Text>{ this.state.result }</Text> */}
          {/* <TextInput
            multiline={true}
            numberOfLines={4}
            
            value={this.state.result}/> */}
          <FlatList
            data={data}
            renderItem={({item}) => <Text>{item.key}, total:{item.total}</Text>}
          />
      </View>
    );
  }
}

export default Decks

