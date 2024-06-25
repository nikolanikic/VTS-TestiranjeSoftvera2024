/// <reference types="cypress" />

describe('Pet Store - basic tests', () => {
    beforeEach(() => {
    })
  
    const petName = 'Rex';
    const petNewName = 'Novica';
    const petId = 789;
    const photoUrl = 'https://cdn.britannica.com/07/234207-050-0037B589/English-bulldog-dog.jpg';
  
    it('User is able to ADD a new pet via API', () => {
      cy.addPet(petName, petId, photoUrl);
    })
  
    it('User is able to FIND AND SAVE TO FILE a new pet via API', () => {
      cy.findPetAndSaveTF(petId);
    })
  
    it('User is able to FIND a new pet via API', () => {
      cy.findPet(petId);
    })
  
    it('User is able to UPDATE a new pet via API', () => {
      cy.updatePet(petNewName, petId, photoUrl);
    })
  
    it('User is able to DELETE a new pet via API', () => {
      cy.deletePet(petId);
    })
  
  })