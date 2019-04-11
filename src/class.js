
class Person{
    constructor(age) {
        this.name='ssx'
        this.age = age      
    }
    sayHello(){
        console.log(`hello ${this.name}, I am ${this.age} years old`)
    }
}
// app = new Person(18)
// app.sayHello()

class Student extends Person{
    constructor(age,like){
        super(age)
        this.like = like
    }

    getLike(){
        return this.like
    }

    setLike(like){
        this.like  = like
    }

}

var s  = new Student(18,'吃东西')
s.sayHello()
console.log(s.getLike())
s.setLike('读书')
console.log(s.getLike())
