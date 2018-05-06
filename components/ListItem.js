import React from 'react';
import { Text, View, FlatList} from 'react-native';
import { getDeckMetaInfo } from '../utils/helpers';


class ListItem extends React.Component {
  render() {
    const metaInfo = getDeckMetaInfo()
    const data = Object.keys(metaInfo).map((key) => {
      return {key: key, total: getDeckMetaInfo(key).questions ? getDeckMetaInfo(key).questions.length: 0}
    })

    console.log(data)

    return (
      <View>
          <FlatList
            data={data}
            renderItem={({item}) => <Text>{item.key}, total:{item.total}</Text>}
          />
      </View>
    );
  }
}

export default ListItem

