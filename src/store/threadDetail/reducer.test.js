/* eslint-disable no-undef */
/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 *  - should return the initial state when given an unknown action
 *  - should return threadDetail when given a RECEIVE_THREAD_DETAIL action
 *
 */

import threadDetailReducer from './reducer'

describe('threadDetailReducer', () => {
  it('should return initial state when given by UNKNOWN action', () => {
    // arrange
    const initialState = null
    const action = { type: 'UNKNOWN' }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })
  it('should return threadDetail when given a RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = null
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg'
              },
              upVotesBy: [],
              downVotesBy: []
            }
          ]
        }
      }
    }

    // action
    const nextState = threadDetailReducer(initialState, action)

    // assert
    expect(nextState).toEqual(action.payload.threadDetail)
  })
})
