import { RECEIVE_ENTRIES, ADD_DECK } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.deck
      }
    default :
      return state
  }
}

export default entries 
