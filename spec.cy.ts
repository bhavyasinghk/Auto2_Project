describe('My First Test', () => {
  it('Visits the initial project page', () => 
  {
    cy.visit('/')
    //cy.contains('app is running')
    cy.get('[placeholder="Enter FirstName"]').type('DemoFName')
    cy.get('[placeholder="Enter LastName"]').type('DemoLName')
    cy.get('[placeholder="Enter Email"]').type('xyz@gmail.com')
    cy.get('[placeholder="Enter Mobile"]').type('2343234343')

    cy.get('[placeholder="Female"]').select
    cy.get('[type="checkbox"]').select

    cy.get('[type="submit"]').click()


   
  })
})
