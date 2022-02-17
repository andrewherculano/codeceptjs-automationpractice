const faker = require('faker')

Feature('Account');

Scenario('Verificar email invalido', ({ I }) => {
   I.amOnPage('/')
   I.click('.login')
   I.waitForElement('#SubmitCreate')
   I.click('#SubmitCreate')
   I.wait(5)
   I.see('Invalid email address.')
});

Scenario('Criar conta', ({ I }) => {
   const email = faker.internet.email()
   const firstName = faker.name.firstName()
   const lastName = faker.name.lastName()
   const password = faker.internet.password()
   const adress = faker.address.streetName()
   const city = faker.address.city()
   const zipCode = faker.address.zipCode()
   const phoneNumber = faker.phone.phoneNumberFormat()

   I.amOnPage('/')
   I.click('.login')
   I.waitForElement('#SubmitCreate')
   I.fillField('#email_create', email)
   I.click('#SubmitCreate')
   I.wait(5)

   I.see('CREATE AN ACCOUNT')
   I.click('#id_gender2')

   I.fillField('#customer_firstname', firstName)
   I.fillField('#customer_lastname', lastName)

   I.fillField('#passwd', secret(password))

   I.scrollTo('#address1')

   I.selectOption('#days', '1')
   I.selectOption('#months', '3')
   I.selectOption('#years', '1994')

   I.scrollPageToBottom()

   I.fillField('#address1', adress)
   I.fillField('#city', city)
   I.selectOption('#id_state', 'California')
   I.fillField('#postcode', zipCode)

   I.fillField('#phone_mobile', phoneNumber)

   I.click('#submitAccount')

   I.wait(5)
   I.see('MY ACCOUNT')
});