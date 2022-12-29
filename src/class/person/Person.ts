class Person {
  name: string
  age: number
  phone: string
  constructor(name_: string, age_: number, phone_: string) {
    this.name = name_
    this.age = age_
    this.phone = phone_
  }
  doEat(who: string, where: string) {
    console.log(`${this.name}和${who}在${where}一起吃饭`)
  }
}
