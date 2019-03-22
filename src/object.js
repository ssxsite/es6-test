const  obj1 = {name:'ssx',age:18}
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))

const name = 'ssx'

const obj2 = {
    name,
    site:'ssx.com',
    [name]:'React开发App',
    [name+'test']:'test',
    sayHello(){
        console.log('hello world!')
    }
}
console.log(obj2)
obj2.sayHello()

const obj3 = {name:'ssx',age:18}
const obj4 = {name:'lili',like:'苹果'}
console.log({...obj3,...obj4,can:'coding'})