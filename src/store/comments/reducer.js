import { ActionType } from './action'

function commentsReducer (threadComment = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_COMMENT:
      return action.payload.threadComment

    default:
      return threadComment
  }
}

export default commentsReducer
