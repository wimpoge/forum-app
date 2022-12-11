/* eslint-disable react/prop-types */
import { BiDislike, BiLike } from 'react-icons/bi'
import CommentThread from '../../comments/CommentThread/CommentThread'
import { ItemBody, ItemContainer, ItemCreatedAt, ItemName, ItemProfile, ItemProfileSub, ItemTitleDetail } from '../ThreadItem/ThreadItem.styled'
import parse from 'html-react-parser'
import { postedAt } from '../../../utils'

/* eslint-disable react/react-in-jsx-scope */
function ThreadDetail ({
  createdAt,
  id,
  title,
  body,
  owner,
  category,
  upVotesBy,
  downVotesBy,
  onThreadVoteUp,
  onThreadVoteDown,
  isThreadVoteUp,
  isThreadVoteDown

}) {
  return (
    <ItemContainer>
      <ItemTitleDetail>{title}</ItemTitleDetail>
      <ItemBody>{parse(body)}</ItemBody>
      <ItemProfile>
        <img src={owner.avatar} />
        <ItemProfileSub>
          <ItemName>{owner.name}</ItemName>
          <span>#{category}</span>
          <div>
            <div>
              <button onClick={onThreadVoteUp}>
                <BiLike style={{ color: isThreadVoteUp ? 'green' : 'none' }} />
              {upVotesBy.length}
              </button>

              <button onClick={onThreadVoteDown}>
                <BiDislike style={{ color: isThreadVoteDown ? 'red' : 'none' }} />
              {downVotesBy.length}
              </button>
            </div>
          </div>
        </ItemProfileSub>
      </ItemProfile>
      <ItemCreatedAt>{postedAt(createdAt)}</ItemCreatedAt>
      <CommentThread id={id} />
    </ItemContainer>
  )
}

export default ThreadDetail
