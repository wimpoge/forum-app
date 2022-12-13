/* eslint-disable no-irregular-whitespace */
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { setAuthUserActionCreator } from '../authUser/action'

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD'
}

function setIsPreloadActionCreator (isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload
    }
  }
}

function asyncPreloadProcess () {
  return async (dispatch) => {
    dispatch(hideLoading())
    try {
      // preload process
      const authUser = await api.getOwnProfile()
      dispatch(setAuthUserActionCreator(authUser))
    } catch (error) {
      // fallback process
      dispatch(setAuthUserActionCreator(null))
    } finally {
      // end preload process
      dispatch(setIsPreloadActionCreator(false))
    }
    dispatch(showLoading())
  }
}

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess
}
