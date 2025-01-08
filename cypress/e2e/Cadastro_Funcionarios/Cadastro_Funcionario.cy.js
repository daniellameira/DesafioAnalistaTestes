/// <reference types="Cypress"/>

describe('Teste de acesso a página de Adicionar Funcionário!', () => {
    it('Deve acessar a página de cadastro de funcionário com sucesso!', () => {
        cy.visit("https://analista-teste.seatecnologia.com.br/")
        cy.get('.c-kUQtTK').click()
        cy.get('h2').should('contain','Adicionar Funcionário')
    });
});

describe('Teste de cadastro de funcionário', () => {
    it('Deve cadastrar um funcinário ativo com sucesso!', () => {
        cy.visit("https://analista-teste.seatecnologia.com.br/")
        //Botão de "Adicionar Funcionário"
        cy.get('.c-kUQtTK').click()
        cy.get('h2').should('contain','Adicionar Funcionário')
        cy.get('.ant-switch-handle').click()
        //Switch de Ativo/Inativo
        cy.get('.ant-switch-inner').should('contain','Ativo')
        //Campo de Nome
        cy.get(':nth-child(1) > .c-jzRMpM').type("User Ativo")
        //Campo de CPF
        cy.get(':nth-child(3) > .c-jzRMpM').type("371.511.240-90")// CPF genérico
        //Campo de RG
        cy.get(':nth-child(5) > .c-jzRMpM').type("17.067.299-2")
        //Campo Data de nascimento
        cy.get(':nth-child(4) > .c-jzRMpM').type("1995-04-26")
        //Campo de número de CA
        cy.get(':nth-child(2) > .c-jzRMpM').type("1")
        //Botão de salvar
        cy.get('.save').click()

        cy.get('h2').should('contain','Funcionário(s)')
    });
});