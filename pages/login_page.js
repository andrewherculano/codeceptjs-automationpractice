const { I, homePage } = inject();

module.exports = {
  fields: {
    email: '#email',
    password: '#passwd',
    userName: '.header_user_info'
  },
  buttons: {
    submitLoginButton: '#SubmitLogin'
  },
  messages: {
  },
  login() {
    homePage.accessLoginPage()
    I.waitForElement(this.fields.email, 10)
    I.fillField(this.fields.email, 'andrew@teste.com')
    I.fillField(this.fields.password, '12345')
    I.click(this.buttons.submitLoginButton)
    I.wait(5)
    I.see('andrew teste', this.fields.userName)
  }
}
