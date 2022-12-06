/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import RegisterInput from './RegisterInput'

describe('RegisterInput Component', () => {
  it('should handle name typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}}/>)
    const nameInput = await screen.getByPlaceholderText('Name')

    // action
    await userEvent.type(nameInput, 'qwe')

    // assert
    expect(nameInput).toHaveValue('qwe')
  })

  it('should handle email typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}}/>)
    const emailInput = await screen.getByPlaceholderText('Email')

    // action
    await userEvent.type(emailInput, 'qwe@qwe.com')

    // assert
    expect(emailInput).toHaveValue('qwe@qwe.com')
  })

  it('should handle password typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => {}}/>)
    const passwordInput = await screen.getByPlaceholderText('Password')

    // action
    await userEvent.type(passwordInput, 'qweqwe')

    // assert
    expect(passwordInput).toHaveValue('qweqwe')
  })

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = jest.fn()
    render(<RegisterInput register={mockRegister} />)
    const nameInput = await screen.getByPlaceholderText('Name')
    await userEvent.type(nameInput, 'qwe')
    const emailInput = await screen.getByPlaceholderText('Email')
    await userEvent.type(emailInput, 'qwe@qwe.com')
    const passwordInput = await screen.getByPlaceholderText('Password')
    await userEvent.type(passwordInput, 'qweqwe')
    const registerButton = await screen.getByRole('button', { name: 'Register' })

    // Action
    await userEvent.click(registerButton)

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'qwe',
      email: 'qwe@qwe.com',
      password: 'qweqwe'
    })
  })
})
