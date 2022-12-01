import { ActionType } from './action'

function threadDetailReducer (threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail
    case ActionType.CLEAR_THREAD_DETAIL:
      return null
    case ActionType.RECEIVE_THREAD_COMMENT:
      return {
        ...threadDetail,
        comment: [action.payload.threadDetail]
      }
    case ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        up: threadDetail.up.includes(action.payload.userId)
          ? threadDetail.up.filter((id) => id !== action.payload.userId)
          : threadDetail.up.concat(action.payload.userId)
      }
    default:
      return threadDetail
  }
}

export default threadDetailReducer
