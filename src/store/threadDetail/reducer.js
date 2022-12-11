import { ActionType } from './action'

function threadDetailReducer (threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail
    case ActionType.CLEAR_THREAD_DETAIL:
      return null
    // case ActionType.RECEIVE_THREAD_COMMENT:
    //   return {
    //     ...threadDetail,
    //     comment: [action.payload.threadDetail]
    //   }
    case ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy
          : [...threadDetail.upVotesBy, action.payload.userId],
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.downVotesBy
      }
    case ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.upVotesBy,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy
          : [...threadDetail.downVotesBy, action.payload.userId]
      }
    case ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.userId),
        downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.userId)
      }

    default:
      return threadDetail
  }
}

export default threadDetailReducer
