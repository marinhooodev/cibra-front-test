const selectors = {
    name: 'input[id="name"]',
    email: 'input[id="email"]',
    street: 'input[id="address.street"]',
    company: 'input[id="company.name"]',
    button: 'button[type="submit"]'
  };

describe("Formulário de criação de usuário", () => {
    beforeEach(() => {
        cy.visit("/create-user");
    });

    it("Deve preencher e enviar o formulário com sucesso", () => {
        
        cy.get(selectors.name).type("John Doe");
        cy.get(selectors.email).type("john@example.com");
        cy.get(selectors.street).type("123 Main St");
        cy.get(selectors.company).type("Tech Corp")

        cy.get(selectors.button).click();

        cy.contains("User successfuly created!").should("be.visible");

        cy.get(selectors.name).should("have.value", "");
        cy.get(selectors.email).should("have.value", "");
        cy.get(selectors.street).should("have.value", "");
        cy.get(selectors.company).should("have.value", "");
    });
});