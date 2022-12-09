import api from '../../utils/api'

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UP_VOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD',
  TOGGLE_DOWN_VOTE_THREAD: 'TOGGLE_DOWN_VOTE_THREAD',
  TOGGLE_NEUTRALIZE_VOTE_THREAD: 'TOGGLE_NEUTRALIZE_VOTE_THREAD'
}

function receiveThreadsActionCreator (threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads
    }
  }
}

function addThreadActionCreator (thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread
    }
  }
}

function toggleUpVoteThreadActionCreator (threadId, userId) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}
function toggleDownVoteThreadActionCreator (threadId, userId) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}
function toggleNeutralizeVoteThreadActionCreator (threadId, userId) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function asyncAddThread ({ title, body, category = '' }) {
  return async (dispatch) => {
    try {
      const thread = await api.createThread({ title, body, category })
      dispatch(addThreadActionCreator(thread))
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncToggleVoteUpThread ({ threadId, isDownVote }) {
  return async (dispatch, getState) => {
    const { authUser } = getState()

    dispatch(toggleUpVoteThreadActionCreator({ userId: authUser.id, threadId }))

    try {
      await api.toggleUpVoteThread(threadId)
    } catch (error) {
      if (isDownVote) {
        dispatch(
          toggleDownVoteThreadActionCreator({ userId: authUser.id, threadId })
        )
      } else {
        dispatch(
          toggleNeutralizeVoteThreadActionCreator({ userId: authUser.id, threadId })
        )
      }
    }
  }
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleUpVoteThreadActionCreator,
  asyncToggleVoteUpThread,
  asyncAddThread
}
