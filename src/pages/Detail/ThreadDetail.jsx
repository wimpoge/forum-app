/* eslint-disable no-undef */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comments from '../../components/comments/Comments'
import { ItemBody, ItemContainer, ItemCreatedAt, ItemName, ItemProfile, ItemProfileSub, ItemTitleDetail } from '../../components/ThreadsList/ThreadItem/ThreadItem.styled'
import { asyncNeutralizeVoteThreadDetail, asyncReceiveThreadDetail, asyncToggleDownVoteThreadDetail, asyncToggleUpVoteThreadDetail } from '../../store/threadDetail/action'
import { postedAt } from '../../utils'
/* eslint-disable react/react-in-jsx-scope */
import { BiDislike, BiLike } from 'react-icons/bi'
import CommentThread from '../../components/comments/CommentThread/CommentThread'
import parse from 'html-react-parser'

function ThreadDetail () {
  const { id } = useParams()
  const { threadDetail = null, authUser } = useSelector((states) => states)
  const dispatch = useDispatch()
  const isThreadVoteUp = threadDetail?.upVotesBy.includes(authUser?.id)
  const isThreadVoteDown = threadDetail?.downVotesBy.includes(authUser?.id)

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [id, dispatch])

  if (!threadDetail) {
    return null
  }

  const onVoteUpThread = () => {
    if (isThreadVoteUp) {
      return dispatch(asyncNeutralizeVoteThreadDetail({ threadId: id, isThreadVoteUp }))
    }
    return dispatch(asyncToggleUpVoteThreadDetail({ threadId: id, isThreadVoteDown }))
  }

  const onVoteDownThread = () => {
    if (isThreadVoteDown) {
      return dispatch(asyncNeutralizeVoteThreadDetail({ threadId: id }))
    }
    dispatch(asyncToggleDownVoteThreadDetail({ threadId: id, isThreadVoteUp }))
  }

  return (
    <>
      <ItemContainer>
        <ItemTitleDetail>{threadDetail.title}</ItemTitleDetail>
        <ItemBody>{parse(threadDetail.body)}</ItemBody>
        <ItemProfile>
          <img src={threadDetail.owner.avatar} />
          <ItemProfileSub>
            <ItemName>{threadDetail.owner.name}</ItemName>
            <span>#{threadDetail.category}</span>
            <div>
              <button onClick={() => onVoteUpThread(id)}>
                {isThreadVoteUp ? <BiLike style={{ color: 'green' }} /> : <BiLike />}
              </button>
              {threadDetail.upVotesBy.length}

              <button onClick={() => onVoteDownThread(id)}>
                {isThreadVoteDown ? <BiDislike style={{ color: 'red' }} /> : <BiDislike />}
              </button>
              {threadDetail.downVotesBy.length}
            </div>
          </ItemProfileSub>
        </ItemProfile>
        <ItemCreatedAt>{postedAt(threadDetail.createdAt)}</ItemCreatedAt>
        <CommentThread id={threadDetail.id} />
      </ItemContainer>

      <ItemContainer>
        <Comments {...threadDetail} key={threadDetail.id} />
      </ItemContainer>
    </>
  )
}

export default ThreadDetail
