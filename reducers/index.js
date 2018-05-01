import { RECEIVE_DECKS, ADD_DECK } from '../actions'

const _decks = [
    {
      displayName: 'Run1',
    },
    {
      displayName: 'Run2',
    },
    {
      displayName: 'Run3',
    },
    {
      displayName: 'Run3',
    },
    {
      displayName: 'Run3',
    },
    {
      displayName: 'Run3',
    },
    {
      displayName: 'Run3',
    },
]

function decks (state = _decks, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
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


export default decks 
