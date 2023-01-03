class Person {
  //ts4之前的版本
  name: string | undefined
  //ts4之后的版本
  age!: number
  phone!: string
  constructor(name_: string) {
    this.name = name_
  }
  doEat(who: string, where: string) {
    console.log(`${this.name}和${who}在${where}一起吃饭`)
  }
}
