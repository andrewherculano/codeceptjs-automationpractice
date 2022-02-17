Feature('Account');

// Scenario('Verificar email invalido', ({ I }) => {
//    I.amOnPage('/')
//    I.click('.login')
//    I.waitForElement('#SubmitCreate')
//    I.click('#SubmitCreate')
//    I.wait(5)
//    I.see('Invalid email address.')
// });

Scenario('Criar conta', ({ I }) => {
   const randomNumber = Math.random() * 100

   I.amOnPage('/')
   I.click('.login')
   I.waitForElement('#SubmitCreate')
   I.fillField('#email_create', `emailteste${randomNumber}@email.com`)
   I.click('#SubmitCreate')
   I.wait(5)

   I.see('CREATE AN ACCOUNT')
   I.click('#id_gender2')

   I.fillField('#customer_firstname', 'Andrew')
   I.fillField('#customer_lastname', 'Silva')

   I.fillField('#passwd', secret('q1w2e3'))

   I.scrollTo('#address1')

   I.selectOption('#days', '1')
   I.selectOption('#months', '3')
   I.selectOption('#years', '2001')

   I.scrollPageToBottom()

   I.fillField('#address1', 'Beco Hexagonal, 001')
   I.fillField('#city', 'Jundiaí')
   I.selectOption('#id_state', 'California')
   I.fillField('#postcode', '00000')

   I.fillField('#phone_mobile', '1198828837')

   I.click('#submitAccount')

   I.wait(5)
   I.see('MY ACCOUNT')
});