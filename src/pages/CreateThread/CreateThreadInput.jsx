import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { asyncAddThread } from '../../store/threads/action'
import { ItemContainer } from '../../components/ThreadsList/ThreadItem/ThreadItem.styled'
import { useNavigate } from 'react-router-dom'
/* eslint-disable react/react-in-jsx-scope */

function CreateThreadInput () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [title, setText] = useState('')
  const [body, setBody] = useState('')

  const onAddThread = ({ title, body }) => {
    dispatch(asyncAddThread({ title, body }))
    navigate('/')
  }

  const handleTextChange = ({ target }) => {
    if (target.value.length <= 30) {
      setText(target.value)
    }
  }
  const handleBodyChange = ({ target }) => {
    if (target.value.length <= 320) {
      setBody(target.value)
    }
  }
  return (
        <>
      <ItemContainer className="talk-input">
      <input type="text" placeholder="Title" value={title} onChange={handleTextChange} />
      <input type="text" placeholder="Body" value={body} onChange={handleBodyChange} />
      <p className="talk-input__char-left">
        <strong>{body.length}</strong>
        /320
      </p>
      <button type="submit" onClick={() => onAddThread({ title, body })}>Talk</button>
    </ItemContainer>
        </>
  )
}

export default CreateThreadInput
