 // 1
 class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getGender() {
    return this.gender;
  }

  toString() {
    return Author: ${this.name}, Email: ${this.email}, Gender: ${this.gender};
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }

  getQuantity() {
    return this.quantity;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }

  getProfit() {
    return this.price * this.quantity;
  }

  toString() {
    return Book: ${this.title}, ${this.author.toString()}, Price: $${this.price}, Quantity: ${this.quantity};
  }
}
const author1 = new Author("J.K. Rowling", "jkrowling@example.com", "Female");
const book1 = new Book("Harry Potter", author1, 20, 100);

console.log(book1.toString());
console.log(book1.getProfit());

// 2

class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getBalance() {
    return this.balance;
  }

  setBalance(balance) {
    this.balance = balance;
  }

  credit(amount) {
    this.balance += amount;
    return this.balance;
  }

  debit(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Amount exceeded balance.");
    }
  }

  transferTo(anotherAccount, amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      anotherAccount.credit(amount);
      return this.balance;
    } else {
      console.log("Amount exceeded balance.");
    }
  }

  static identifyAccounts(accountFirst, accountSecond) {
    return (
      accountFirst.id === accountSecond.id &&
      accountFirst.name === accountSecond.name &&
      accountFirst.balance === accountSecond.balance
    );
  }

  toString() {
    return Account ID: ${this.id}, Name: ${this.name}, Balance: $${this.balance};
  }
}

const account1 = new Account(123, "Mery Tsaturyan", 1000);
const account2 = new Account(456, "Anun Azganunyan", 500);

console.log(account1.toString());
console.log(account2.toString());

account1.credit(200);
console.log("Updated balance:", account1.getBalance());

account2.debit(100);
console.log("Updated balance:", account2.getBalance());

account1.transferTo(account2, 300);
console.log("Account 1 balance after transfer:", account1.getBalance());
console.log("Account 2 balance after transfer:", account2.getBalance());

console.log(Account.identifyAccounts(account1, account2));

// 3

class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }

  getFirstName() {
    return this.firstName;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  getLastName() {
    return this.lastName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  getGender() {
    return this.gender;
  }

  setGender(gender) {
    this.gender = gender;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  toString() {
    return ${this.firstName} ${this.lastName} - Gender: ${this.gender}, Age: ${this.age};
  }
}

class Student extends Person {
  constructor(firstName, lastName, gender, age, program, year, fee) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.year = year;
    this.fee = fee;
  }

  getProgram() {
    return this.program;
  }

  setProgram(program) {
    this.program = program;
  }

  getYear() {
    return this.year;
  }

  setYear(year) {
    this.year = year;
  }

  getFee() {
    return this.fee;
  }

  setFee(fee) {
    this.fee = fee;
  }

  passExam(programName, grade) {
    const programIndex = this.program.findIndex(p => p.programName === programName);
    if (programIndex !== -1) {
      this.program[programIndex].grade = grade;
      const allPassed = this.program.every(p => p.grade >= 50);
      if (allPassed) {
        this.year++;
      }
    }
  }

  toString() {
    return ${this.firstName} ${this.lastName} - Year: ${this.year}, Fee: $${this.fee};
  }
}
const student1 = new Student("Mery", "Tsaturyan", "Female", 21, [{ programName: "Math", grade: 60 }], 1, 1000);
console.log(student1.toString());

student1.passExam("Math", 70);
console.log(student1.toString());
