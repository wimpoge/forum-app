/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Leaderboards from './pages/Leaderboards/Leaderboards'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ThreadDetail from './pages/Detail/ThreadDetail'
import Threads from './pages/Threads/Threads'
import { asyncPreloadProcess } from './store/isPreload/action'
import { asyncUnsetAuthUser } from './store/authUser/action'
import CreateThreadInput from './pages/CreateThread/CreateThreadInput'

function App () {
  const { authUser = null, isPreload = false } = useSelector((states) => states)

  const dispatch = useDispatch()

  useEffect(() => {
    // @TODO: dispatch async action to preload app
    dispatch(asyncPreloadProcess())
  }, [dispatch])

  const onLogOut = () => {
    dispatch(asyncUnsetAuthUser())
  }

  if (isPreload) {
    return null
  }

  if (authUser === null) {
    return (
      <Routes>
        <Route path='/*' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    )
  }

  return (
    <>
    <div>
      <header>
          <Nav authUser={authUser} logout={onLogOut}/>
      </header>
        <Routes>
            <Route index element={<Threads />} />
            <Route path='/threads' element={<CreateThreadInput />}/>
            <Route path='/thread/:id' element={<ThreadDetail />}/>
            <Route path='leaderboards' element={<Leaderboards />} />
        </Routes>
      </div>
    </>
  )
}

export default App
