import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import RegisterInput from '../../components/Input/RegisterInput'
import { asyncRegisterUser } from '../../store/users/action'
import { RegisterContainer } from './Register.styles'

/* eslint-disable react/react-in-jsx-scope */
function Register () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }))

    navigate('/')
  }

  return (
    <>
      <RegisterContainer>
        <h2>Register</h2>

      <RegisterInput register={onRegister}/>
        <Link to='/'>Already have an account?</Link>
      </RegisterContainer>
    </>
  )
}

export default Register
