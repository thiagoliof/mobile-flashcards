export const RECEIVE_ENTRIES = 'RECEIVE_DECKS'
export const ADD_ENTRY = 'ADD_DECK'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_ENTRY,
    deck,
  }
} 