const Engineer= require('../lib/engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object", () => {
            const obj= new Engineer();

            expect(typeof(obj)).toEqual("object");
        })
    })

    describe("Name", () => {
        it("should return engineer name", () => {
            const obj= new Engineer("Max");
            
            expect(obj.name).toEqual("Max");
        })
    })

    describe("Id", () => {
        it("should assign engineer id", () => {
            const obj= new Engineer("Max", 1);
            
            expect(obj.id).toEqual(1);
        })
    })

    describe("Email", () => {
        it("should return engineer email in a string", () => {
            const obj= new Engineer("Max", 1, "max@email.com");
            
            expect(obj.email).toEqual("max@email.com");
        })
    })
    
    describe("getRole", () => {
        it("should return role using getRole", () => {
            const obj= new Engineer("Max", 1, "max@email.com");
            const role= "Engineer";
            
            expect(obj.getRole()).toEqual(role);
        })
    })

    describe("Github", () => {
        it("should create Github", () => {
            const obj= new Engineer("Max", 1, "max@email.com", "zenitramxam");
            expect(obj.github).toEqual("zenitramxam");
        })
    })

});