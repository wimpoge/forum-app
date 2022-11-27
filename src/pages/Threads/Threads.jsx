/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading/Loading'
import ThreadsList from '../../components/ThreadsList/ThreadsList'
import useLogin from '../../hooks/useLogin'
import { asyncPopulateUsersAndThreads } from '../../store/shared/action'

function Threads () {
  const { threads = [], authUser } = useSelector((states) => states)
  const dispatch = useDispatch()
  const { isPending } = useLogin()

  useEffect(() => {
    // @TODO: dispatch async action to populate talks and users data
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const threadList = threads.map((thread) => ({
    ...thread,
    authUser: authUser.id
  }))

  console.log(authUser)

  return (
    <div>
      {isPending
        ? <Loading />
        : <ThreadsList threads={threadList}/>
      }
        </div>
  )
}

export default Threads
