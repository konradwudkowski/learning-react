var React = require('react');
var ReactDOM = require('react-dom');
var Show = require('./Show')
var shows = require('./shows')

ReactDOM.render(
    <div>
        <Show shows={shows} showIndex={1}/>
    </div>,
    document.getElementById('root')
)

// Function Constructor
const Employee = function(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName

    // this.getFulllName = function() { } // would create this a separate method for each object

    Employee.prototype.getFullName = function() {
        return this.firstName + ' ' + this.lastName
    }
}

var Engineer = function(firstName, lastName, field) {
    Employee.call(this, firstName, lastName)
    this.field = field
}

Engineer.prototype = Object.create(Employee.prototype)
Engineer.prototype.constructor = Engineer
Engineer.prototype.getDescription = function() {
    return this.getFullName() + ', ' + this.field + ' Engineer'
}

Engineer.greeting = function() { 
    return 'sayHi';
}
console.log(Engineer.greeting())

var sam = new Engineer("Sam", "Williams", "Software")
console.log(sam)
console.log(sam.getFullName())
console.log(sam.getDescription())

// ES6 Class

class EmployeeES6 {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
}

class EngineerES6 extends EmployeeES6 {
    // constructor(firstName, lastName, field) {
    //     super(firstName, lastName)
    //     this.field = field
    // }
    // constructor(...args) {
    //     super(...args)
    // }

    static greeting2() {
        return 'sayHi_static'
    }

    getDescription = function() {
        return this.getFullName() + ', ' + this.field + ' Engineer'
    }
}

EngineerES6.greeting = function() { 
    return 'sayHi_es6';
}

console.log(EngineerES6.greeting())
console.log(EngineerES6.greeting2())

const sammy = new EngineerES6("Sammy", "Winchester", 'Electronics')

console.log(sammy)
console.log(sammy.getFullName())
console.log(sammy.getDescription())
