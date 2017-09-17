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

var sam = new Employee("Sam", "Williams")

console.log(sam)
console.log(sam.getFullName())
console.log(Employee.prototype === sam.__proto__)

// ES6 Class

class Employee2 {

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName
    }

}

const sammy = new Employee2("Sammy", "Winchester")
console.log(sammy)
console.log(sammy.getFullName())
console.log(Employee2.prototype === sammy.__proto__)
