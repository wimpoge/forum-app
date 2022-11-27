import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comments from '../../components/comments/Comments'
import { ItemBody, ItemContainer, ItemCreatedAt, ItemName, ItemProfile, ItemProfileSub, ItemTitleDetail } from '../../components/ThreadsList/ThreadItem/ThreadItem.styled'
import { asyncReceiveThreadDetail } from '../../store/threadDetail/action'
import { postedAt } from '../../utils'
/* eslint-disable react/react-in-jsx-scope */
import { BiLike } from 'react-icons/bi'
import CommentThread from '../../components/comments/CommentThread/CommentThread'
function ThreadDetail () {
  const { id } = useParams()
  const { threadDetail = null } = useSelector(states => states)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [id, dispatch])

  if (!threadDetail) {
    return null
  }

  return (
    <>
      <ItemContainer>
        <ItemTitleDetail>{threadDetail.title}</ItemTitleDetail>
        <ItemBody>{threadDetail.body}</ItemBody>
        <ItemProfile>
          <img src={threadDetail.owner.avatar} />
          <ItemProfileSub>
            <ItemName>{threadDetail.owner.name}</ItemName>
            {/* <button onClick={() => onLikeThread(id)}>
          {isThreadLike ? <BiLike style={{ color: 'red' }} /> : <BiDislike />}
          </button> */}
            <ItemName><BiLike /> {threadDetail.upVotesBy.length}</ItemName>
          </ItemProfileSub>
        </ItemProfile>
        <ItemCreatedAt>{postedAt(threadDetail.createdAt)}</ItemCreatedAt>
        <CommentThread />
      </ItemContainer>

      <ItemContainer>

        <Comments {...threadDetail} />
      </ItemContainer>
    </>
  )
}

export default ThreadDetail
