import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { asyncAddThread } from '../../store/threads/action'
import { useNavigate } from 'react-router-dom'
import { Input, ItemContainer } from './CreateThreadInput.styles'
/* eslint-disable react/react-in-jsx-scope */

function CreateThreadInput () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [title, setText] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('')

  const onAddThread = (e) => {
    e.preventDefault()
    dispatch(asyncAddThread({ title, body, category }))
    navigate('/')
  }

  const handleTextChange = ({ target }) => {
    if (target.value.length <= 30) {
      setText(target.value)
    }
  }
  const handleCategoryChange = ({ target }) => {
    if (target.value.length <= 30) {
      setCategory(target.value)
    }
  }
  const handleBodyChange = ({ target }) => {
    if (target.value.length <= 320) {
      setBody(target.value)
    }
  }
  return (
    <>
      <ItemContainer>
        <Input type="text" placeholder="Title" value={title} onChange={handleTextChange} />
        <p>
          <strong>{title.length}</strong>
          /30
        </p>
        <Input type="text" placeholder="category" value={category} onChange={handleCategoryChange} />
        <p>
          <strong>{category.length}</strong>
          /30
        </p>
        <Input type="text" placeholder="Body" value={body} onChange={handleBodyChange} />
        <p>
          <strong>{body.length}</strong>
          /320
        </p>
        <button type="submit" onClick={onAddThread}>Create Thread</button>
      </ItemContainer>
    </>
  )
}

export default CreateThreadInput
