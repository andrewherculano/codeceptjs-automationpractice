const { I } = inject();

module.exports = {
  fields: {
    emailAddressRegisterField: '#email_create'
  },
  buttons: {
    createAnAccountButton: '#SubmitCreate'
  },
  messages: {
  },
  acessCreateAccountPage(email) {
    I.waitForElement(this.buttons.createAnAccountButton)
    I.fillField(this.fields.emailAddressRegisterField, email)
    I.click(this.buttons.createAnAccountButton)
    I.wait(5)
  }
}
