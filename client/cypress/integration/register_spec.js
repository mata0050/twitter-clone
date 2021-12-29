describe('Register a User', function () {
  it('Register a user existing email', function () {
    cy.visit('http://localhost:3000/register');
    cy.get('[type="text"]').type('Joe');
    cy.get('[type="email"]').type('timksskc@test.com');
    cy.get('[name="password"]').type('test123');
    cy.get('[placeholder="Confirm Password"]').type('test123');
    cy.get('[type="submit"]').click();
    cy.get('.register > .alert').should('be.visible');
    cy.window()
      .its('store')
      .invoke('getState')
      .its('auth')
      .should('deep.equal', {
        token: null,
        isAuthenticated: false,
        user: null,
        username: null,
        userId: null,
        loading: false,
      });
  });

  it('Register a user no email', function () {
    cy.visit('http://localhost:3000/register');
    cy.get('[type="text"]').type('Joe');
    cy.get('[name="password"]').type('test123');
    cy.get('[placeholder="Confirm Password"]').type('test123');
    cy.get('[type="submit"]').click();
    cy.get('.register > .alert').should('be.visible');
    cy.window()
      .its('store')
      .invoke('getState')
      .its('auth')
      .should('deep.equal', {
        token: null,
        isAuthenticated: false,
        user: null,
        username: null,
        userId: null,
        loading: false,
      });
  });

  it('Register a user no password', function () {
    cy.visit('http://localhost:3000/register');
    cy.get('[type="text"]').type('Joe');
    cy.get('[type="email"]').type('timksskc@test.com');
    cy.get('[placeholder="Confirm Password"]').type('test123');
    cy.get('[type="submit"]').click();
    cy.get('.register > .alert').should('be.visible');
    cy.window()
      .its('store')
      .invoke('getState')
      .its('auth')
      .should('deep.equal', {
        token: null,
        isAuthenticated: false,
        user: null,
        username: null,
        userId: null,
        loading: false,
      });
  });

  it('Register a user no username', function () {
    cy.visit('http://localhost:3000/register');
    cy.get('[type="email"]').type('timksskc@test.com');
    cy.get('[name="password"]').type('test123');
    cy.get('[placeholder="Confirm Password"]').type('test123');
    cy.get('[type="submit"]').click();
    cy.get('.register > .alert').should('be.visible');
    cy.window()
      .its('store')
      .invoke('getState')
      .its('auth')
      .should('deep.equal', {
        token: null,
        isAuthenticated: false,
        user: null,
        username: null,
        userId: null,
        loading: false,
      });
  });

});

describe('Login a User', function () {
  it('Login without password ', function () {
    cy.visit('http://localhost:3000/login');
    cy.get('[type="email"]').type('timksskc@test.com');
    cy.get('[type="submit"]').click();
    cy.get('.form > .alert').should('be.visible');
  });

  it('Login without email ', function () {
    cy.visit('http://localhost:3000/login');
    cy.get('[name="password"]').type('test123');
    cy.get('[type="submit"]').click();
    cy.get('.form > .alert').should('be.visible');
  });

  it('All field filled in', function () {
    cy.visit('http://localhost:3000/login');
    cy.get('[type="email"]').type('timksskc@test.com');
    cy.get('[name="password"]').type('test123');
    cy.get('[type="submit"]').click();
    cy.get('.user-info').should('be.visible');
  });

});
