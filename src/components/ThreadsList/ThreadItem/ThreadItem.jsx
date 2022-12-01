/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { postedAt } from '../../../utils'
import { ItemBody, ItemButton, ItemComment, ItemContainer, ItemCreatedAt, ItemOwner, ItemTitle } from './ThreadItem.styled'

/* eslint-disable react/react-in-jsx-scope */

function ThreadItem ({ id, title, body, category, createdAt, totalComments, user }) {
  const navigate = useNavigate()

  const onDetailClick = () => {
    navigate(`/thread/${id}`)
  }
  return (
         <ItemContainer>
              <ItemTitle onClick={onDetailClick}>{title}</ItemTitle>
              <ItemBody>{body}</ItemBody>
              <ItemCreatedAt>{postedAt(createdAt)}</ItemCreatedAt>
              <ItemComment>Jumlah Komentar: {totalComments}</ItemComment>
              <ItemButton>#{category}</ItemButton>
              <ItemOwner>dibuat oleh: {user.name}</ItemOwner>
            </ItemContainer>
  )
}

export default ThreadItem
