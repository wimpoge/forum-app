/* eslint-disable react/react-in-jsx-scope */
import { Form, Input } from '../../pages/Login/Login.styles'
import PropTypes from 'prop-types'
import useInput from '../../hooks/useInput'

function LoginInput ({ login }) {
  const [email, onEmailChange] = useInput()
  const [password, onPasswordChange] = useInput()
  return (
        <Form>
            <Input value={email} label="Email" type="email" onChange={onEmailChange} name="email" placeholder='Email' />
            <Input value={password} label="Password" type="password" onChange={onPasswordChange} name="password" placeholder='Password' />

            <div className="button-container">
                <button type="submit" onClick={(e) => {
                  e.preventDefault()
                  login({ email, password })
                }}>
                    Login
                    </button>
            </div>
        </Form>

  )
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired
}

export default LoginInput
