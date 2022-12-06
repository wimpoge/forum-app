/* eslint-disable no-undef */
/**
 * - Register spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register')
  })

  it('should display register page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Name"]').should('be.visible')
    cy.get('input[placeholder="Email"]').should('be.visible')
    cy.get('input[placeholder="Password"]').should('be.visible')
  })

  it('should display alert when name is empty', () => {
    // mengisi name
    cy.get('input[placeholder="Email"]').type('qwe@qwe.com')
    cy.get('input[placeholder="Password"]').type('qweqwe')

    // klik tombol register tanpa mengisi name
    cy.get('button').contains(/^Register$/).click()

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" is not allowed to be empty')
    })
  })

  it('should display alert when email is empty', () => {
    // mengisi name
    cy.get('input[placeholder="Name"]').type('asd')
    cy.get('input[placeholder="Password"]').type('asdasd')

    // klik tombol register tanpa mengisi name
    cy.get('button').contains(/^Register$/).click()

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty')
    })
  })

  it('should display alert when password is empty', () => {
    // mengisi name
    cy.get('input[placeholder="Name"]').type('asd')
    cy.get('input[placeholder="Email"]').type('asd@asd.com')

    // klik tombol register tanpa mengisi password
    cy.get('button').contains(/^Register$/).click()

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty')
    })
  })
})
