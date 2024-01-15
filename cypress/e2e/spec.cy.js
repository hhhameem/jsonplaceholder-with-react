describe("template spec", () => {
  before(() => {
    cy.visit("/");
  });

  it("Click Users", () => {
    expect(true).to.equal(true);
  });

  it("Click Posts", () => {
    expect(true).to.equal(false);
  });
});
