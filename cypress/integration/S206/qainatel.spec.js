describe('UI Test Automation Playground Cypress Test', function () {
  it('Visits the Automation Playground page', function () {
    //Visit the Demo QA Website
    cy.visit('http://uitestingplayground.com/');
  })

  it('Find a link name and click', function () {
    cy.contains('Text Input').click();
  })

  it('Type a String to change the button name', function () {
    cy.get('#newButtonName').type('anAmazingAndSpecificText');
    cy.contains("Button That Should Change it's Name Based on Input Value").click();
    cy.go('back');
  })

  it('Execute a button click and make sure it was clicked', function () {
    testButton();
    cy.go('back');
  })

  //negative test
  it('Try to fill a form and use an invalid input', function () {
    cy.contains('Sample App').click();
    if (cy.contains('User logged out.')) {
      cy.get('input[name=UserName]').type('user');
      cy.get('input[name=Password]').type('`pwd`');
      cy.contains('Log In').click();

    }
    //login failure
    cy.contains('Invalid username/password');
    cy.go('back');
  })

  it('Create a test that finds an element with Welcome... text.', function () {
    cy.contains('Overlapped Element').click();
    cy.get('.bg-primary').find('.badge-secondary').invoke('text').then((text) => { expect(text.trim()).equal('Welcome UserName!') });
  })

  

})

function testButton() {
  cy.contains('Mouse Over').click();
  let repeats = 10;
  for (let n = 0; n < repeats; n++) {
    cy.contains('Click me').click()
  }
  let verification = `The link clicked ${repeats} times`;
  cy.contains(verification);


}



