// A linha de código abaixo, trás o auto-completa do cypress.
/// <reference types='cypress' />

describe('Central de atendimento ao cliente TAT', () => {
    //O comando 'beforeEach', faz com que o site seja visitado antes 
    //de cada caso de teste
    beforeEach(() => {
        //Essee comando 'cy.visit' faz com que o cypress acesse a url espeficicada
        cy.visit('src/index.html')
        cy.setResolution([1280, 800]);
    })
    //O comando 'it' serve para especificar cada (it)'item de teste'
    it.only('Verifica o titulo da aplicação', () => {
        //verifica se o titulo da página é igual ao esperado
        //por meio do comando 'be.equal'          
        cy.wait(2000)
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it.only('exibe mensagem de sucesso ao submeter o formulário com os campos obrigatórios preenchidos corretamente', () => {
        //O comando 'cy.get' serve para pegar algum elemento CSS exibido no site.
        //Já o comando 'type' serve para inserir um conteúdo dentro de algum elemento
        cy.get('#firstName').type('Daniel')
        cy.wait(2000)
        cy.get('#lastName').type('Melo')
        cy.wait(2000)
        cy.get('#email').type('daniel@mail.com')
        cy.wait(2000)
        cy.get('#open-text-area').type('Larrgoouuuuu !!!!')
        cy.wait(2000)
        //o comando 'click()' simula o click em cima do elemento selecionado.
        cy.get('button[type="submit"]').click()
        cy.wait(2000)
        //verifica se a mensagem de sucesso está sendo exibida, 
        //por meio do comando 'be.visible'
        cy.get('.success').should('be.visible')
        cy.wait(2000)
    })

    it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName').type('Daniel')
        cy.wait(2000)
        cy.get('#lastName').type('Melo')
        cy.wait(2000)
        cy.get('#email').type('daniel@mail,com')
        cy.wait(2000)
        cy.get('#open-text-area').type('Largouuuuu !!!!!!')
        cy.wait(2000)
        cy.get('button[type="submit"]').click()
        cy.wait(2000)
        //verifica se a mensagem de error está sendo exibida, 
        //por meio do comando 'be.visible'
        cy.get('.error').should('be.visible')
    })

    it.only('campo telefone continua vazio quando preenchido com valor não-numérico', () => {
        cy.get('#phone')
            .type('abcdefgh')
            //verifica se tem o valor estimado - nesse caso valor vazio
            .should('have.value', '')
    })

    it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName').type('Daniel')
        cy.wait(2000)
        cy.get('#lastName').type('Melo')
        cy.wait(2000)
        cy.get('#email').type('daniel@mail.com')
        cy.wait(2000)
        cy.get('#phone-checkbox').click()
        cy.wait(2000)
        cy.get('#open-text-area').type('Largoouuuuuu !!!!!!!!!!!!')
        cy.wait(2000)
        cy.get('button[type="submit"]').click()
        cy.wait(2000)
        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('#firstName').type('Daniel')
            .should('have.value', 'Daniel')
            .clear()
            .should('have.value', '')
        cy.get('#lastName').type('Melo')
            .should('have.value', 'Melo')
            .clear()
            .should('have.value', '')
        cy.get('#email').type('daniel@mail.com')
            .should('have.value', 'daniel@mail.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone').type('81986951601')
            .should('have.value', '81986951601')
            .clear()
            .should('have.value', '')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        cy.contains('.button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', () => {
        //O novo comando abaixo, foi criando no arquivo commands.js, lá você
        //tem a possibilidade de criar comandos que servirão como atalhos e 
        //irão reduzir o código
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (YouTube) por seu texto', () => {
        //selecionando opções do seletor
        cy.get('select')
            .select('YouTube')
            .should('have.value', 'youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', () => {
        cy.get('#product').select('mentoria').should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', () => {
        cy.get('#product').select(1).should('have.value', 'blog')
    })

    it('Seleciona um tipo de atendimento (Feedback)', () => {
        cy.get('input[type="radio"][value="feedback"]')
            //Comando para selecionar um campo do tipo radio/checkbox
            .check()
            .should('have.value', 'feedback')
    })

    it('Seleciona cada opção de atendimento', () => {
        cy.get('input[type="radio"]')
            .should('have.length', '3')
            .each(($radio) => {
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            })
    })

    Cypress._.times(4, () => {
        it('marca ambas opções de contato preferencial', () => {
            cy.get('input[type="checkbox"]')
                .check()
                .should('be.checked')
                //seleciona o último checkbox 
                .last()
                //desmarca o checkbox indicado
                .uncheck()
                .should('not.be.checked')
        })
    })

    it('Seleciona um arquivo da pasta fixtures', () => {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
            .should(($input) => {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })
    it('Seleciona um arquivo silumando um drag-and-drop', () => {
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json', { action: "drag-drop" })
            .should(($input) => {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })

    it('Seleciona um arquivo por meio do alias do mesmo', () => {
        cy.fixture("example").as('sampleFile')
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('@sampleFile')
            .should(($input) => {
                expect($input[0].files[0].name).to.equal('example')
            })
    })

    it('Verificação o request http',()=>{
        cy.request('https://qa.mouralock.isitics.com/')
        .should((response)=>{
            const {status, statusText} = response
            expect(status).equal(200)
            expect(statusText).equal('OK')
            console.log(response)
        })
    })

    it('Encontra gato', ()=>{
        cy.get('#cat')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .invoke('hide')
        .should('not.be.visible')
    })

})