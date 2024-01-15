describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Click Users on navbar", () => {
    cy.get("[data-test='nav-item-users']").contains("Users").click();
    cy.url().should("include", "/users");
  });

  it("Click Posts on navbar", () => {
    cy.get("[data-test='nav-item-posts']").contains("Posts").click();
    cy.url().should("include", "/posts");
  });
});
