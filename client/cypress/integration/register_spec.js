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

describe('Create a tweet', function () {
  it('Write tweet ', function () {
    const tweet = `Heroes like @PumlaNtlabati are spreading important information, and hope, across South Africa with the help of an unusual and innovative tool: `;

    cy.get('.avatar > button').click({ force: true });
    cy.get('textarea').type(tweet, { force: true });
    cy.get('input').click({ force: true });
  });

  it('Create Comment ', function () {
    const tweet = `Good Job `;

    cy.get(
      ':nth-child(1) > article > .content > footer > .comment > .far'
    ).click({ force: true });
    cy.get('textarea').type(tweet, { force: true });
    cy.get('input').click({ force: true });
  });
});


describe('On News', function () {
  it('News Api fail, Limited to 200 requests ', function () {
   cy.get('.sc-crHmcD > h3').scrollIntoView().should('be.visible');
  });

  // it('Create Comment ', function () {
  //   const tweet = `Good Job `;

  //   cy.get(
  //     ':nth-child(1) > article > .content > footer > .comment > .far'
  //   ).click({ force: true });
  //   cy.get('textarea').type(tweet, { force: true });
  //   cy.get('input').click({ force: true });
  // });
});