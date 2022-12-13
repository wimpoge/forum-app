/* eslint-disable no-undef */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comments from '../../components/comments/Comments'
import { ItemContainer } from '../../components/ThreadsList/ThreadItem/ThreadItem.styled'
import { asyncNeutralizeVoteThreadDetail, asyncReceiveThreadDetail, asyncToggleDownVoteThreadDetail, asyncToggleUpVoteThreadDetail } from '../../store/threadDetail/action'
/* eslint-disable react/react-in-jsx-scope */

import ThreadDetail from '../../components/ThreadsList/ThreadDetail/ThreadDetail'

function DetailPage () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { threadDetail = null, authUser } = useSelector((states) => states)
  const isThreadVoteUp = threadDetail?.upVotesBy.includes(authUser?.id)
  const isThreadVoteDown = threadDetail?.downVotesBy.includes(authUser?.id)

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [id, dispatch])

  const onThreadVoteUp = () => {
    if (isThreadVoteUp) {
      dispatch(asyncNeutralizeVoteThreadDetail({ threadId: id, isThreadVoteUp }))
      return
    }
    dispatch(asyncToggleUpVoteThreadDetail(isThreadVoteDown))
  }

  const onThreadVoteDown = () => {
    if (isThreadVoteDown) {
      dispatch(asyncNeutralizeVoteThreadDetail({ threadId: id }))
      return
    }
    dispatch(asyncToggleDownVoteThreadDetail(isThreadVoteUp))
  }

  if (!threadDetail) {
    return null
  }

  return (
    <>
    <ThreadDetail
    {...threadDetail}
    onThreadVoteUp={onThreadVoteUp}
    onThreadVoteDown={onThreadVoteDown}
    isThreadVoteUp={isThreadVoteUp}
    isThreadVoteDown={isThreadVoteDown}
    />

      <ItemContainer>
        <Comments {...threadDetail} key={threadDetail.id} />
      </ItemContainer>
    </>
  )
}

export default DetailPage
