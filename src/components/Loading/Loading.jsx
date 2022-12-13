import LoadingBar from 'react-redux-loading-bar'
// import { LoadingAnimation } from './Loading.styles'
import '../../index.css'
import { LoadingAnimation } from './Loading.styles'
/* eslint-disable react/react-in-jsx-scope */
function Loading () {
  return (
    <LoadingAnimation>
        <LoadingBar />
    </LoadingAnimation>
  )
}

export default Loading
