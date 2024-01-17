describe("first", () => {
  const pets = [
    { name: "CJ", breed: "German Shepherd" },
    { name: "Olympia", breed: "Basenji Mix" },
    { name: "Scout", breed: "cat" },
  ]
  it("homepage links are good", () => {
    cy.visit("/")
    cy.get(".hero__title").should("contain", "Pet Sitters Guide to Galaxy")
    pets.forEach((pet) => {
      cy.get(`[data-pet="${pet.name}"]`)
        .should("contain.text", pet.name)
        .should("contain.text", pet.breed)
        .should("have.attr", "href", `/docs/pets/${pet.name.toLowerCase()}`)
    })
    cy.get('[href="/docs/pets"]').should(
      "contain.text",
      "Find what you need, click here"
    )
    cy.contains("GitHub").should(
      "have.attr",
      "href",
      "https://github.com/mikikiv/petsite"
    )
    cy.contains("Feeding info").should("have.attr", "href", "/docs/pets/food")
  })
  it.skip("has can navigate around good", () => {
    cy.visit("/")
    cy.contains("Find what you need, click here").click()
    cy.url().should("include", "/docs/pets")
    cy.get('[href="/docs/pets/food"]').click()
    cy.url().should("include", "/docs/pets/food")
    cy.get('[href="/docs/pets"]').click()
    cy.url().should("include", "/docs/pets")
  })
})
