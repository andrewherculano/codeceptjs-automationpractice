const faker = require('faker')

const { I, homePage, registerPage, createUserPage } = inject()

Feature('Criar novo usuario')

Scenario('Verificar email invalido', () => {
   I.amOnPage('/')
   homePage.accessLoginPage()

   I.waitForElement('#SubmitCreate')
   I.click('#SubmitCreate')
   I.wait(5)
   I.see('Invalid email address.')
});

Scenario('Criar usuario', () => {
   const email = faker.internet.email()
   const firstName = faker.name.firstName()
   const lastName = faker.name.lastName()
   const password = faker.internet.password()
   const adress = faker.address.streetName()
   const city = faker.address.city()
   const phoneNumber = faker.phone.phoneNumberFormat()

   I.amOnPage('/')
   homePage.accessLoginPage()
   registerPage.acessCreateAccountPage(email)
   createUserPage.fillFieldsCreateUser(firstName, lastName, password, adress, city, phoneNumber)
   createUserPage.createUser(firstName, lastName)
})