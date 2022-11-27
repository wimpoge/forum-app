import api from '../../utils/api'

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UP_VOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD'
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

function toggleUpVoteActionCreator ({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  }
}

function asyncAddThread ({ title, body, category }) {
  return async (dispatch) => {
    try {
      const thread = await api.createThread({ title, body, category })
      dispatch(addThreadActionCreator(thread))
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncToggleUpVoteThread (threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState()
    dispatch(toggleUpVoteActionCreator({ threadId, userId: authUser.id }))

    try {
      await api.toggleUpVote(threadId)
    } catch (error) {
      dispatch(toggleUpVoteActionCreator({ threadId, userId: authUser.id }))
    }
  }
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleUpVoteActionCreator,
  asyncAddThread,
  asyncToggleUpVoteThread
}
