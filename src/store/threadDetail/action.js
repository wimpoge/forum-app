import api from '../../utils/api'

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UP_VOTE_THREAD_DETAIL: 'TOGGLE_DOWN_VOTE_THREAD_DETAIL',
  TOGGLE_DOWN_VOTE_THREAD_DETAIL: 'TOGGLE_DOWN_VOTE_THREAD_DETAIL',
  TOGGLE_NEUTRALIZE_VOTE_THREAD_DETAIL: 'TOGGLE_NEUTRALIZE_VOTE_THREAD_DETAIL',
  RECEIVE_THREAD_COMMENT: 'RECEIVE_THREAD_COMMENT',
  VOTE_UP_THREAD_COMMENT: 'VOTE_UP_THREAD_COMMENT'
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

function addThreadCommentActionCreator (threadComment) {
  return {
    type: ActionType.RECEIVE_THREAD_COMMENT,
    payload: {
      threadComment
    }
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

function toggleDownVoteThreadDetailActionCreator (userId) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId
    }
  }
}

function toggleNeutralizeVoteThreadDetailActionCreator (userId) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD_DETAIL,
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
      await api.toggleUpVoteThread(threadDetail.id)
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncToggleDownVoteThreadDetail () {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState()
    dispatch(toggleDownVoteThreadDetailActionCreator(authUser.id))

    try {
      await api.toggleDownVoteThread(threadDetail.id)
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncNeutralizeVoteThreadDetail () {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState()

    dispatch(toggleNeutralizeVoteThreadDetailActionCreator(authUser.id))

    try {
      await api.toggleNeutralizeVoteThread(threadDetail.id)
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncAddThreadComment ({ content, id }) {
  return async (dispatch) => {
    try {
      const threadComment = await api.createComment({ content, id })
      dispatch(addThreadCommentActionCreator(threadComment))
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
  toggleDownVoteThreadDetailActionCreator,
  toggleNeutralizeVoteThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  addThreadCommentActionCreator,
  asyncAddThreadComment,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail
}
