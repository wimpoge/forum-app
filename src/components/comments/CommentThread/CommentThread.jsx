import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ItemContainer } from '../../ThreadsList/ThreadItem/ThreadItem.styled'
import { CommentReply } from './CommentThread.styles'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import { asyncAddThreadComment } from '../../../store/threadDetail/action'
/* eslint-disable react/react-in-jsx-scope */
function CommentThread () {
  const { id } = useParams()
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onReplyThread = ({ id, content }) => {
    dispatch(asyncAddThreadComment({ id, content }))
    navigate('/')
  }

  const handleBodyChange = ({ target }) => {
    if (target.value.length <= 320) {
      setContent(target.value)
    }
  }

  return (
    <>
    <form>
      <ItemContainer className="talk-input">
        <input type="text" placeholder="Body" value={content} onChange={handleBodyChange}/>
        <p className="talk-input__char-left">
          <strong>{content.length}</strong>
          /320
        </p>
        <CommentReply type='submit' onClick={(e) => {
          e.preventDefault()
          onReplyThread({ id, content })
        }
        }
        >Balas</CommentReply>
      </ItemContainer>
        </form>
    </>
  )
}

CommentThread.propTypes = {
  id: PropTypes.string.isRequired
}

export default CommentThread
