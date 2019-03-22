var obj = {
     name :'ssx',
     age : 20,
    sayHello:function(){
        console.log(`module1 hello ${name}`)
    }
}

export default obj
export var name = obj.name
export var age = obj.age
export var sayHello = obj.sayHello