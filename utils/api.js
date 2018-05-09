import { AsyncStorage } from 'react-native'
import { getDeckMetaInfo } from './helpers';

const DECKS_STORAGE_KEY = 'Flashcards:Decks'

export function getDecks () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}

export function getDeck(key){
    return getDecks().then(results => {
        const _result = JSON.parse(results)
        return _result[key]
    })
}

export function saveDeckTitle( title ){
    
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            questions: []
         }
    }))
}

export function addCardToDeck( title, card ){
    getDeck(title).then((result=> {
        var questions = result.questions
        questions.push({question: card.question, answer:card.answer})
        AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [title]: {
                title,
                questions: questions
             }
        }))
        
    }))
}



export function setDecksData () {
    
    const dummyData = getDeckMetaInfo()
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
    return dummyData
   
}

  
 //export function submitDeck ({ entry, key }) {
//     return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
//       [key]: entry
//     }))
// }
  
export function removeDeck (key) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then((results) => {
        const data = JSON.parse(results)
        data[key] = undefined
        delete data[key]
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
      })
}


