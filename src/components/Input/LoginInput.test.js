/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import LoginInput from './LoginInput'

describe('LoginInput Component', () => {
  it('should handle email typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}}/>)
    const emailInput = await screen.getByPlaceholderText('Email')

    // action
    await userEvent.type(emailInput, 'qwe@qwe.com')

    // assert
    expect(emailInput).toHaveValue('qwe@qwe.com')
  })

  it('should handle password typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}}/>)
    const passwordInput = await screen.getByPlaceholderText('Password')

    // action
    await userEvent.type(passwordInput, 'qweqwe')

    // assert
    expect(passwordInput).toHaveValue('qweqwe')
  })

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn()
    render(<LoginInput login={mockLogin} />)
    const emailInput = await screen.getByPlaceholderText('Email')
    await userEvent.type(emailInput, 'qwe@qwe.com')
    const passwordInput = await screen.getByPlaceholderText('Password')
    await userEvent.type(passwordInput, 'qweqwe')
    const loginButton = await screen.getByRole('button', { name: 'Login' })

    // Action
    await userEvent.click(loginButton)

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'qwe@qwe.com',
      password: 'qweqwe'
    })
  })
})
