import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comments from '../../components/comments/Comments'
import { ItemBody, ItemContainer, ItemCreatedAt, ItemName, ItemProfile, ItemProfileSub, ItemTitleDetail } from '../../components/ThreadsList/ThreadItem/ThreadItem.styled'
import { asyncReceiveThreadDetail, asyncToggleUpVoteThreadDetail } from '../../store/threadDetail/action'
import { postedAt } from '../../utils'
/* eslint-disable react/react-in-jsx-scope */
import { BiDislike, BiLike } from 'react-icons/bi'
import CommentThread from '../../components/comments/CommentThread/CommentThread'

function ThreadDetail () {
  const { id } = useParams()
  const { threadDetail = null, authUser } = useSelector((states) => states)
  const dispatch = useDispatch()
  const isThreadVoteUp = threadDetail?.upVotesBy.includes(authUser?.id)

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [id, dispatch])

  if (!threadDetail) {
    return null
  }

  const onLikeThread = () => {
    dispatch(asyncToggleUpVoteThreadDetail(id))
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
            <span>#{threadDetail.category}</span>
            <div>
              <button onClick={() => onLikeThread(id)}>
                {isThreadVoteUp ? <BiDislike style={{ color: 'red' }} /> : <BiLike />}
              </button>
              {threadDetail.upVotesBy.length}
            </div>
          </ItemProfileSub>
        </ItemProfile>
        <ItemCreatedAt>{postedAt(threadDetail.createdAt)}</ItemCreatedAt>
        <CommentThread id={threadDetail.id}/>
      </ItemContainer>

      <ItemContainer>

        <Comments {...threadDetail} key={threadDetail.id} />
      </ItemContainer>
    </>
  )
}

export default ThreadDetail
