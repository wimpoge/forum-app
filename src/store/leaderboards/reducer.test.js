/* eslint-disable no-undef */
/**
 * test scenario for leaderboardsreducer
 *
 * - leaderboardsReducer function
 *  - should return the initial state when given an unknown action
 *  - should return leaderboards data when given a RECEIVE_LEADERBOARDS action
 *
 */

import leaderboardsReducer from './reducer'

describe('leaderboardsReducer', () => {
  it('should return the initial state when given an unknown action', () => {
    // arrange
    const initialState = []
    const action = { type: 'UNKNOWN' }

    // action
    const nextState = leaderboardsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })
  it('should return leaderboards data when given a RECEIVE_LEADERBOARDS action', () => {
    // arrange
    const initialState = []
    const action = {
      type: 'RECEIVE_LEADERBOARDS',
      payload: {
        leaderboards: [
          {
            user: {
              id: 'users-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://generated-image-url.jpg'
            },
            score: 10
          },
          {
            user: {
              id: 'users-2',
              name: 'Jane Doe',
              email: 'jane@example.com',
              avatar: 'https://generated-image-url.jpg'
            },
            score: 5
          }
        ]
      }
    }
    // action
    const nextState = leaderboardsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.leaderboards)
  })
})
