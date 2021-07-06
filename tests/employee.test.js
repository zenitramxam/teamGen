const Employee= require('../lib/employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object", () => {
            const obj= new Employee();

            expect(typeof(obj)).toEqual("object");
        })
    })

    describe("Name", () => {
        it("should return employee name", () => {
            const obj= new Employee("Max");
            
            expect(obj.name).toEqual("Max");
        })
    })

    describe("Id", () => {
        it("should assign employee id", () => {
            const obj= new Employee("Max", 1);
            
            expect(obj.id).toEqual(1);
        })
    })

    describe("Email", () => {
        it("should return employee email", () => {
            const obj= new Employee("Max", 1, "max@email.com");
            
            expect(obj.email).toEqual("max@email.com");
        })
    })
    
    describe("getRole", () => {
        it("should return employee email", () => {
            const obj= new Employee("Max", 1, "max@email.com");
            const role= "Employee";
            
            expect(obj.getRole()).toEqual(role);
        })
    })


});