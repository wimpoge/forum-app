import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './authUser/reducer'
import commentsReducer from './comments/reducer'
import isPreloadReducer from './isPreload/reducer'
import leaderboardsReducer from './leaderboards/reducer'
import threadDetailReducer from './threadDetail/reducer'
import threadsReducer from './threads/reducer'
import usersReducer from './users/reducer'

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    users: usersReducer,
    leaderboards: leaderboardsReducer,
    comments: commentsReducer
  }
})

export default store
