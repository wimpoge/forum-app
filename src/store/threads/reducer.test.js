/* eslint-disable no-undef */
/**
 * test scenario for threadsReducer
 *
 * - talkReducers function
 *  - should return the initial state when given an unknown action
 *  - should return the talks with the new talk when given a ADD_THREAD action
 *  - should return the talks with the toggled like talk when given a TOGGLE_UP_VOTE_THREAD action
 *
 */

import threadsReducer from './reducer'

describe('threadReducer function', () => {
  it('should return the initial state when given an unknown action', () => {
    // arrange
    const initialState = []
    const action = { type: 'UNKNOWN' }

    // action
    const nextState = threadsReducer(initialState, action)

    // assert
    expect(nextState).toEqual(initialState)
  })

  //   it('should return the initial state when given ADD_THREADS action', () => {
  //     // arrange
  //     const initialState = [
  //       {
  //         id: 'thread-1',
  //         title: 'Thread Pertama',
  //         body: 'Ini adalah thread pertama',
  //         category: 'General',
  //         createdAt: '2021-06-21T07:00:00.000Z',
  //         ownerId: 'users-1',
  //         upVotesBy: [],
  //         downVotesBy: [],
  //         totalComments: 0
  //       }
  //     ]
  //     const action = {
  //       type: 'ADD_THREADS',
  //       payload: {
  //         thread: [

  //           {
  //             id: 'thread-2',
  //             title: 'Thread Kedua',
  //             body: 'Ini adalah thread kedua',
  //             category: 'General',
  //             createdAt: '2021-11-21T07:00:00.000Z',
  //             ownerId: 'users-1',
  //             upVotesBy: [],
  //             downVotesBy: [],
  //             totalComments: 0
  //           }
  //         ]
  //       }
  //     }

  //     // action
  //     const nextState = threadsReducer(initialState, action)

//     // assert
//     expect(nextState).toEqual([action.payload.thread, ...initialState])
//   })
})
