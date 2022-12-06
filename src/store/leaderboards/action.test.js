/* eslint-disable no-undef */
/**
 * skenario test
 *
 * - asyncReceiveLeaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import api from '../../utils/api'
import { asyncReceiveLeaderboards, receiveLeaderboardsActionCreator } from './action'

const leaderboardsDummyData = [
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

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncPopulateUsersAndTalks thunk', () => {
  beforeEach(() => {
    api._getLeaderboard = api.getLeaderboard
  })

  afterEach(() => {
    // restore original implementation
    api.getLeaderboard = api._getLeaderboard

    // delete backup
    delete api._getLeaderboard
  })
  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getLeaderboard = () => Promise.resolve(leaderboardsDummyData)
    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncReceiveLeaderboards()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(leaderboardsDummyData))
  })
  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getLeaderboard = () => Promise.reject(fakeErrorResponse)
    // mock dispatch
    const dispatch = jest.fn()
    // mock alert
    window.alert = jest.fn()

    // action
    await asyncReceiveLeaderboards()(dispatch)

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
