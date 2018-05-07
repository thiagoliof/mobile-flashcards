import React from 'react';
import { Text, View, FlatList} from 'react-native';
import { getDeckMetaInfo } from '../utils/helpers';
import  {setDecksData, fetchDeckResults, getDeck}  from '../utils/api';


class Decks extends React.Component {
  state = {result:''}
  
  componentDidMount(){
    fetchDeckResults().then(result => {
      // this.setState({
      //   result: result
      // })
    })

    getDeck('React').then(result => {
      console.log(result)
       this.setState({
         result: result
       })
    })
    

  }

  render() {
    const metaInfo = getDeckMetaInfo()
    const data = Object.keys(metaInfo).map((key) => {
      return {key: key, total: getDeckMetaInfo(key).questions ? getDeckMetaInfo(key).questions.length: 0}
    })

    return (
      <View>
          <Text>{ JSON.stringify(this.state.result) }</Text>
          {/* <FlatList
            data={data}
            renderItem={({item}) => <Text>{item.key}, total:{item.total}</Text>}
          /> */}
      </View>
    );
  }
}

export default Decks

