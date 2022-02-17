const faker = require('faker')

const { I, homePage, registerPage, createUserPage } = inject()

Feature('Criar novo usuario')

Scenario('Verificar email invalido', ({ I }) => {
   I.amOnPage('/')
   homePage.accessLoginPage()

   I.waitForElement('#SubmitCreate')
   I.click('#SubmitCreate')
   I.wait(5)
   I.see('Invalid email address.')
});

Scenario('Criar usuario', ({ I }) => {
   const email = faker.internet.email()
   const firstName = faker.name.firstName()
   const lastName = faker.name.lastName()
   const password = faker.internet.password()
   const adress = faker.address.streetName()
   const city = faker.address.city()
   const phoneNumber = faker.phone.phoneNumberFormat()

   I.amOnPage('/')

   // acessar a login page
   homePage.accessLoginPage()

   // verificar email e acessar a página de cadastro de usúario
   registerPage.acessCreateAccountPage(email)

   // preencher campos do formulario de cadastro
   createUserPage.fillFieldsCreateUser(firstName, lastName, password, adress, city, phoneNumber)

   //cadastrar usuario
   createUserPage.createUser()
})