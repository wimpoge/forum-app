import api from '../../utils/api'

const ActionType = {
  RECEIVE_THREAD_COMMENT: 'RECEIVE_THREAD_COMMENT'
}

function addThreadComment (threadComment) {
  return {
    type: ActionType.RECEIVE_THREAD_COMMENT,
    payload: {
      threadComment
    }
  }
}

function asyncAddThreadComment ({ content }) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment({ content })
      dispatch(addThreadComment(comment))
    } catch (error) {
      alert(error.message)
    }
  }
}

export {
  ActionType,
  addThreadComment,
  asyncAddThreadComment
}
