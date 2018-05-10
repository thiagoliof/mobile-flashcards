import {
    ADD_DECK,
} from '../actions'

import { combineReducers } from 'redux';

const infoDeckState = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    JavaScript2: {
      title: 'JavaScript2',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    
  }

function deck (state = infoDeckState, action){
    switch (action.type) {
        case ADD_DECK :
            return {
                state
            }
        default :
            return state
    }
}

export default combineReducers({ deck }) 