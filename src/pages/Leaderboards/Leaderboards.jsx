import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncReceiveLeaderboards } from '../../store/leaderboards/action'
import { LeaderboardsContainer } from './Leaderboards.styles'

/* eslint-disable react/react-in-jsx-scope */
function Leaderboards () {
  const { leaderboards = [] } = useSelector((states) => states)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards())
  }, [dispatch])

  if (!leaderboards) {
    return null
  }

  return (
        <>
          {leaderboards.map(leaderboard => (
            <LeaderboardsContainer key={leaderboard.user.id}>
              <img src={leaderboard.user.avatar} />
              <p>{leaderboard.user.name}</p>
              <p>{leaderboard.score}</p>
            </LeaderboardsContainer>
          ))}
        </>
  )
}

export default Leaderboards
