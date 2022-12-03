/* eslint-disable react/no-unescaped-entities */
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import LoginInput from '../../components/Input/LoginInput'
import { asyncSetAuthUser } from '../../store/authUser/action'
import { LoginContainer } from './Login.styles'

/* eslint-disable react/react-in-jsx-scope */

function Login () {
  const dispatch = useDispatch()
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }))
  }

  return (
    <>
      <LoginContainer>
        <h2>Login</h2>
        <LoginInput login={onLogin} />
        <Link to='/register'>Don't have an account?</Link>
      </LoginContainer>
    </>
  )
}

export default Login
