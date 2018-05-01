import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { getDeckMetaInfo } from './utils/helpers';

export default class App extends React.Component {
  render() {
    const metaInfo = getDeckMetaInfo()
    const data = Object.keys(metaInfo).map((key) => {
      return {key: key}
    })
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,249,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
