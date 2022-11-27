import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { asyncAddThreadComment } from '../../../store/comments/action'
import { ItemContainer } from '../../ThreadsList/ThreadItem/ThreadItem.styled'
import { CommentReply } from './CommentThread.styles'
/* eslint-disable react/react-in-jsx-scope */
function CommentThread () {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const onReplyThread = ({ content }) => {
    dispatch(asyncAddThreadComment({ content }))
  }

  function replyThread ({ content }) {
    if (content.trim()) {
      onReplyThread({ content })
      setContent('')
    }
  }

  const handleBodyChange = ({ target }) => {
    if (target.value.length <= 320) {
      setContent(target.value)
    }
  }

  return (
        <>
            <ItemContainer className="talk-input">
                <input type="text" placeholder="Body" value={content} onChange={handleBodyChange} />
                <p className="talk-input__char-left">
                    <strong>{content.length}</strong>
                    /320
                </p>
                <CommentReply type='submit' onClick={replyThread({ content })}>Balas</CommentReply>
            </ItemContainer>
        </>
  )
}

export default CommentThread
