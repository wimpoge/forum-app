import { ActionType } from './action'

function threadDetailReducer (threadDetail = [], action = {}) {
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
      return threadDetail.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId)
              ? thread.upVotesBy
              : [...thread.upVotesBy, action.payload.userId],
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
              : thread.downVotesBy
          }
        }

        return thread
      })
    case ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL:
      return threadDetail.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId)
              ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
              : thread.upVotesBy,
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? thread.downVotesBy
              : [...thread.downVotesBy, action.payload.userId]
          }
        }

        return thread
      })
    case ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD_DETAIL:
      return threadDetail.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
            downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId)
          }
        }
        return thread
      })

    default:
      return threadDetail
  }
}

export default threadDetailReducer
