describe('Navigation', () =>{
  it("Add, and delete users", () => {
    cy.visit('/users');
    cy.get('button').contains('Charger un petit mock').click();
    cy.get('button').contains('Ajouter un user aléatoire').click();
    cy.get('button').contains('Supprimer').click();
    cy.get('button').contains('Vider la liste omg').click();
    cy.visit('/products');
  })
})
