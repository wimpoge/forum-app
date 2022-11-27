/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { postedAt } from '../../../utils'
import { ItemBody, ItemComment, ItemContainer, ItemCreatedAt, ItemOwner, ItemTitle } from './ThreadItem.styled'

/* eslint-disable react/react-in-jsx-scope */

function ThreadItem ({ id, title, body, createdAt, totalComments, ownerId }) {
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
              <ItemOwner>dibuat oleh: {ownerId}</ItemOwner>
            </ItemContainer>
  )
}

export default ThreadItem
