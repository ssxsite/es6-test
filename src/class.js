
class MyApp{
    constructor(age) {
        this.name='ssx'
        this.age = age      
    }
    sayHello(){
        console.log(`hello ${this.name}, I am ${this.age} years old`)
    }
}
app = new MyApp(18)
app.sayHello()