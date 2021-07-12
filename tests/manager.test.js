const Manager= require('../lib/manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object", () => {
            const obj= new Manager();

            expect(typeof(obj)).toEqual("object");
        })
    })

    describe("Name", () => {
        it("should return manager name", () => {
            const obj= new Manager("Max");
            
            expect(obj.name).toEqual("Max");
        })
    })

    describe("Id", () => {
        it("should assign manager id", () => {
            const obj= new Manager("Max", 1);
            
            expect(obj.id).toEqual(1);
        })
    })

    describe("Email", () => {
        it("should return manager email", () => {
            const obj= new Manager("Max", 1, "max@email.com");
            
            expect(obj.email).toEqual("max@email.com");
        })
    })
    
    describe("getRole", () => {
        it("should return role using getRole", () => {
            const obj= new Manager("Max", 1, "max@email.com");
            const role= "Manager";
            
            expect(obj.getRole()).toEqual(role);
        })
    })

    describe("officeNumber", () => {
        it("should return office number as a number", () => {
            const obj= new Manager("Max", 1, "max@email.com", 121);
            expect(obj.officeNumber).toEqual(121);
        })
    })

});