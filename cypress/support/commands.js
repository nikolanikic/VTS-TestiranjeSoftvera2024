// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addPet', (petName, petId, photoUrl) => {
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', {
        "id": petId,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": petName,
        "photoUrls": [
            photoUrl
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', petId);
        expect(response.body).to.have.property('name', petName);
    })
});

Cypress.Commands.add('findPet', (petId) => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', petId);
    });
})

Cypress.Commands.add('findPetAndSaveTF', (petId) => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', petId);
        cy.writeFile('cypress/downloads/pet.json', response.body);
    });
})

Cypress.Commands.add('deletePet', (petId) => {
    cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/' + petId).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', String(petId));
    });
})

Cypress.Commands.add('updatePet', (petNewName, petId, photoUrl) => {
    cy.request('PUT', 'https://petstore.swagger.io/v2/pet', {
        "id": petId,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": petNewName,
        "photoUrls": [
            photoUrl
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', petId);
        expect(response.body).to.have.property('name', petNewName);
    })
});