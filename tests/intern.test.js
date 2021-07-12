const Intern= require('../lib/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object", () => {
            const obj= new Intern();

            expect(typeof(obj)).toEqual("object");
        })
    })

    describe("Name", () => {
        it("should return intern name", () => {
            const obj= new Intern("Max");
            
            expect(obj.name).toEqual("Max");
        })
    })

    describe("Id", () => {
        it("should assign intern id", () => {
            const obj= new Intern("Max", 1);
            
            expect(obj.id).toEqual(1);
        })
    })

    describe("Email", () => {
        it("should return intern email", () => {
            const obj= new Intern("Max", 1, "max@email.com");
            
            expect(obj.email).toEqual("max@email.com");
        })
    })
    
    describe("getRole", () => {
        it("should return role using getRole", () => {
            const obj= new Intern("Max", 1, "max@email.com");
            const role= "Intern";
            
            expect(obj.getRole()).toEqual(role);
        })
    })

    describe("School", () => {
        it("should return a school in a string", () => {
            const obj= new Intern("Max", 1, "max@email.com", "Utsa");
            expect(obj.school).toEqual("Utsa");
        })
    })

});