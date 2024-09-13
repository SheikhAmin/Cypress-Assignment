import Task from "../pom/Task";

describe("Section B",()=>{
    const obj = new Task();
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    beforeEach("Visit & Login",()=>{
     cy.visit("http://localhost/mywordpress/wp-login.php?loggedout=true&wp_lang=en_US");
    })

    it("Login",()=>{
     
         obj.Login(username,password);
    })
})