/* eslint-disable react/prop-types */
import { BiDislike, BiLike } from 'react-icons/bi'
import CommentThread from '../../comments/CommentThread/CommentThread'
import { ItemBody, ItemContainer, ItemCreatedAt, ItemName, ItemProfile, ItemProfileSub, ItemTitleDetail } from '../ThreadItem/ThreadItem.styled'
import parse from 'html-react-parser'
import { postedAt } from '../../../utils'
import PropTypes from 'prop-types'
/* eslint-disable react/react-in-jsx-scope */
function ThreadDetail ({
  createdAt,
  id,
  title,
  body,
  owner,
  category,
  authUser, onVoteUp, onVoteDown,
  upVotesBy,
  downVotesBy,
  onNeutralizeVote
}) {
  const isThreadVoteUp = upVotesBy.includes(authUser)
  const isThreadVoteDown = downVotesBy.includes(authUser)

  const onVoteUpThread = (e) => {
    e.stopPropagation()
    onVoteUp(id)
  }

  const onVoteDownThread = (e) => {
    e.stopPropagation()
    onVoteDown(id)
  }

  const onNeutralizeVoteThread = (e) => {
    e.stopPropagation()
    onNeutralizeVote(id)
  }
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

                            {isThreadVoteUp
                              ? (
                                <button onClick={onVoteUpThread}>
                                        <BiLike style={{ color: 'green' }} />
                                    </button>

                                )
                              : (
                                <button onClick={onNeutralizeVoteThread}>
                                <BiLike />
                            </button>
                                )}
                                 {upVotesBy.length}
                            <div>
                            </div>

                            {isThreadVoteDown
                              ? (
                                <button onClick={onVoteDownThread}>
                                <BiDislike style={{ color: 'red' }} />
                            </button>
                                )
                              : (
                                <button onClick={onNeutralizeVoteThread}>
                                <BiDislike />
                            </button>

                                )}
                                {downVotesBy.length}
                        </div>

                    </div>
                </ItemProfileSub>
            </ItemProfile>
            <ItemCreatedAt>{postedAt(createdAt)}</ItemCreatedAt>
            <CommentThread id={id} />
        </ItemContainer>
  )
}

ThreadDetail.propTypes = {
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ThreadDetail
