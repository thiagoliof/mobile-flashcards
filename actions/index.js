export const ADD_DECK = 'ADD_DECK'
export const ADD_GAME = 'ADD_GAME'

export function addDeck ( deck ) {
    
    return {
        type: ADD_DECK,
        payload: deck 
    }
}

export function addGame ( game ) {
    
    return {
        type: ADD_GAME,
        payload:game
    }
}
