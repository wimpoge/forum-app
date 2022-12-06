/* eslint-disable no-undef */
/**
 * skenario test
 *
 * - asyncReceiveThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import api from '../../utils/api'
import { asyncReceiveThreadDetail, receiveThreadDetailActionCreator } from './action'

const threadDetailDummyData = {
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

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncPopulateUsersAndTalks thunk', () => {
  beforeEach(() => {
    api._getThreadsDetail = api.getThreadsDetail
  })

  afterEach(() => {
    // restore original implementation
    api.getThreadsDetail = api._getThreadsDetail

    // delete backup
    delete api._getThreadsDetail
  })
  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getThreadsDetail = () => Promise.resolve(threadDetailDummyData)
    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncReceiveThreadDetail()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(receiveThreadDetailActionCreator(threadDetailDummyData))
  })
  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getThreadsDetail = () => Promise.reject(fakeErrorResponse)
    // mock dispatch
    const dispatch = jest.fn()
    // mock alert
    window.alert = jest.fn()

    // action
    await asyncReceiveThreadDetail()(dispatch)

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
