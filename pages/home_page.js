const { I } = inject();

module.exports = {
  fields: {

  },
  buttons: {
    loginButton: '.login'
  },
  messages: {

  },
  accessLoginPage() {
    I.click(this.buttons.loginButton)
  }
}
