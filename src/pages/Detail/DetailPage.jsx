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
  const { threadDetail = null, authUser } = useSelector((states) => states)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [id, dispatch])

  if (!threadDetail) {
    return null
  }

  const onVoteUpThreadClick = () => {
    dispatch(asyncToggleUpVoteThreadDetail())
  }
  const onVoteDownThreadClick = () => {
    dispatch(asyncToggleDownVoteThreadDetail())
  }

  const onNeutralizeVoteThreadClick = () => {
    dispatch(asyncNeutralizeVoteThreadDetail())
  }

  return (
    <>
    <ThreadDetail
    {...threadDetail}
    authUser={authUser.id}
    onVoteUp={onVoteUpThreadClick}
    onVoteDown={onVoteDownThreadClick}
    onNeutralizeVote={onNeutralizeVoteThreadClick}
    />

      <ItemContainer>
        <Comments {...threadDetail} key={threadDetail.id} />
      </ItemContainer>
    </>
  )
}

export default DetailPage
