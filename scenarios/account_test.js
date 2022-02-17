Feature('account');

Scenario('verificar email inválido', ({ I }) => {
   I.amOnPage('/')
   I.click('.login')
   I.waitForElement('#SubmitCreate')
   I.click('#SubmitCreate')
   I.wait(5)
   I.see('Invalid email address.')
});

Scenario('verificar email válido', ({ I }) => {
   const randomNumber = Math.random() * 100

   I.amOnPage('/')
   I.click('.login')
   I.waitForElement('#SubmitCreate')
   I.fillField('#email_create', `emailteste${randomNumber}@email.com`)
   I.click('#SubmitCreate')
   I.wait(2)
   I.dontSee('Invalid email address.')
});