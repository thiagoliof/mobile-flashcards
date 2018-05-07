import { AsyncStorage } from 'react-native'
import { getDeckMetaInfo } from './helpers';

const DECKS_STORAGE_KEY = 'Flashcards:Decks'

export function fetchDeckResults () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    //.then(formatDecksResults)
}

export function getDeck(key){
    return fetchDeckResults().then(results => {
        const _result = JSON.parse(results)
        return _result[key]
    })
}
  
export function submitDeck ({ entry, key }) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
      [key]: entry
    }))
}
  
export function removeDeck (key) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
      })
}

export function setDecksData () {
    
    const dummyData = getDeckMetaInfo()
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
    return dummyData
    
}
