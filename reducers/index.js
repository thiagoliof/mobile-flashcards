import {
	ADD_DECK, 
	ADD_GAME
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

function deck (state = {}, action){
    switch (action.type) {
        case ADD_DECK :
            const { payload } = action
            return {
                payload
            }
        default :
            return state
    }
}

const gameInfo = {
    title: 'React',
    position: 0,
    data: [
      {question: 'What is React?', answer: 'is a framework', correct: true, fliped:false},
      {question: 'What is javascript?', answer: 'is a language', correct: false, fliped:true},
    ],
}
function game (state = {}, action){
  
  switch (action.type) {
		case ADD_GAME :
			const { payload } = action
			return {
				payload
			}
		default :
			return state
	}
}

export default combineReducers({ deck, game }) 