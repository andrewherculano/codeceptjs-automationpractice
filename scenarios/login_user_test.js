Feature('Login')

const { I, loginPage } = inject()

Scenario('Logar usuario', () => {
   I.amOnPage('/')
   loginPage.login()
});