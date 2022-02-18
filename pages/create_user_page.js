const { I } = inject();

module.exports = {
  fields: {
    firstName: '#customer_firstname',
    lastName: '#customer_lastname',
    password: '#passwd',
    addressOne: '#address1',
    city: '#city',
    postcode: '#postcode',
    phoneNumber: '#phone_mobile'
  },
  buttons: {
    genderFemale: '#id_gender2',
    day: '#days',
    month: '#months',
    year: '#years',
    state: '#id_state',
    submitAccount: '#submitAccount'
  },
  messages: {
  },
  labels: {
    userName: '.header_user_info',
    titleCreateUserPage: 'CREATE AN ACCOUNT'
  },
  fillFieldsCreateUser(firstName, lastName, password, adress, city, phoneNumber) {
    I.see(this.labels.titleCreateUserPage)

    I.click(this.buttons.genderFemale)

    I.fillField(this.fields.firstName, firstName)
    I.fillField(this.fields.lastName, lastName)

    I.fillField(this.fields.password, secret(password))

    I.scrollTo(this.fields.addressOne)

    I.selectOption(this.buttons.day, '1')
    I.selectOption(this.buttons.month, '3')
    I.selectOption(this.buttons.year, '1994')

    I.scrollPageToBottom()

    I.fillField(this.fields.addressOne, adress)
    I.fillField(this.fields.city, city)
    I.selectOption(this.buttons.state, 'California')
    I.fillField(this.fields.postcode, '00000')

    I.fillField(this.fields.phoneNumber, phoneNumber)
  },
  createUser(firstName, lastName) {
    I.click(this.buttons.submitAccount)
    I.wait(5)
    I.see(`${firstName} ${lastName}`, this.labels.userName)
  }
}
