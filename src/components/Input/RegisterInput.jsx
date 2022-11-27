/* eslint-disable react/react-in-jsx-scope */
import { Form, Input } from '../../pages/Login/Login.styles'
import PropTypes from 'prop-types'
import useInput from '../../hooks/useInput'

function RegisterInput ({ register }) {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  return (
        <Form>
            <Input required value={name} label="Name" type="name" onChange={onNameChange} name="name" placeholder='Name' />
            <Input required value={email} label="Email" type="email" onChange={onEmailChange} name="email" placeholder='Email' />
            <Input required value={password} label="Password" type="password" onChange={onPasswordChange} name="password" placeholder='Password' />

            <div className="button-container">
                <button type="submit" onClick={() => register({ name, email, password })}>Register</button>
            </div>
        </Form>

  )
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired
}

export default RegisterInput
