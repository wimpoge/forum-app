/* eslint-disable no-undef */
import api from '../../utils/api'
import { receiveThreadsActionCreator } from '../threads/action'
import { receiveUsersActionCreator } from '../users/action'
import { asyncPopulateUsersAndThreads } from './action'
/**
 * skenario test
 *
 * - asyncPopulateUsersAndTalks thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
const userDummyData = {
  id: 'users-1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg'
}

const threadsDummyData = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0
}

const fakeErrorResponse = new Error('Ups, something went wrong')

describe('asyncPopulateUsersAndTalks thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers
    api._getAllThreads = api.getAllThreads
  })

  afterEach(() => {
    // restore original implementation
    api.getAllUsers = api._getAllUsers
    api.getAllThreads = api._getAllThreads

    // delete backup
    delete api._getAllUsers
    delete api._getAllThreads
  })
  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.resolve(userDummyData)
    api.getAllThreads = () => Promise.resolve(threadsDummyData)
    // mock dispatch
    const dispatch = jest.fn()

    // action
    await asyncPopulateUsersAndThreads()(dispatch)

    // assert
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(userDummyData))
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(threadsDummyData))
  })
  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse)
    api.getAllThreads = () => Promise.reject(fakeErrorResponse)
    // mock dispatch
    const dispatch = jest.fn()
    // mock alert
    window.alert = jest.fn()

    // action
    await asyncPopulateUsersAndThreads()(dispatch)

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
