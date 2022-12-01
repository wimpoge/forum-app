/* eslint-disable array-callback-return */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../../components/Category/Categories'
import Loading from '../../components/Loading/Loading'
import ThreadsList from '../../components/ThreadsList/ThreadsList'
import useLogin from '../../hooks/useLogin'
import { setCategoryActionCreator } from '../../store/category/action'
import { asyncPopulateUsersAndThreads } from '../../store/shared/action'

function Threads () {
  const { threads = [], authUser, users = [], category = '' } = useSelector((states) => states)
  const dispatch = useDispatch()
  const { isPending } = useLogin()

  useEffect(() => {
    // @TODO: dispatch async action to populate talks and users data
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const filteredThreadList = threads.filter(
    (thread) => thread.category === category || category === ''
  )

  const threadList = filteredThreadList.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id
  }))

  const filterAllCategory = (threads) => {
    const categories = new Set()

    threads.map((thread) => {
      categories.add(thread.category)
    })

    return [...categories]
  }

  const categoriesList = filterAllCategory(threads)

  const changeCategoryHandler = (categories) => {
    dispatch(setCategoryActionCreator(categories))
  }

  return (
    <div>
      {isPending
        ? <Loading />
        : (
          <>
          <Categories categoriesList={categoriesList} changeCategoryHandler={changeCategoryHandler}/>
          <ThreadsList threads={threadList} /></>
          )
      }
        </div>
  )
}

export default Threads
