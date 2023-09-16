class Account {
  constructor({ login, email }) {
    this.login = login;
    this.email = email;
  }
  getInfo() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  }
}





const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); 

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo();