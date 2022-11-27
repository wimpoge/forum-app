import api from '../../utils/api'

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UP_VOTE_THREAD_DETAIL: 'TOGGLE_DOWN_VOTE_THREAD_DETAIL',
  TOGGLE_DOWN_VOTE_THREAD_DETAIL: 'TOGGLE_DOWN_VOTE_THREAD_DETAIL'
}

function receiveThreadDetailActionCreator (threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail
    }
  }
}

function clearThreadDetailActionCreator () {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL
  }
}

function toggleUpVoteThreadDetailActionCreator (userId) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL,
    payload: {
      userId
    }
  }
}

function asyncReceiveThreadDetail (threadId) {
  return async (dispatch) => {
    dispatch(clearThreadDetailActionCreator())
    try {
      const threadDetail = await api.getThreadsDetail(threadId)
      dispatch(receiveThreadDetailActionCreator(threadDetail))
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncToggleUpVoteThreadDetail () {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState()
    dispatch(toggleUpVoteThreadDetailActionCreator(authUser.id))

    try {
      await api.toggleUpVote(threadDetail.id)
    } catch (error) {
      alert(error.message)
    }
  }
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpVoteThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleUpVoteThreadDetail
}
