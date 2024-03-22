let id;
let email;
describe('Teste de API com base nas funcções CRUD', () => {
  before(() => {
    email = "teste"+(Math.floor(Math.random() * 10000))+'@email.com';
  });

  it('GET - Listar usuarios criados', () => {
    cy.request({
      method: 'GET',
      url: 'http://serverest.dev/usuarios'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('usuarios');
      expect(response.body.usuarios).to.be.an('array');
    })
  });

  it('POST - Cadastrar novo usuario', () => {
    cy.request({
      method: 'POST',
      headers: { accept: 'application/json' },
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: "Nome Teste",
        email: email,
        password: "teste",
        administrador: 'true',
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      id = response.body._id;
    })
  });

  it('PUT - Alterar usuario', () => {
    let novoNome = "Teste"+(Math.floor(Math.random() * 10000));
    cy.request({
      method: 'PUT',
      url: 'http://serverest.dev/usuarios/'+id,
      body: {
        nome: novoNome,
        email: email,
        password: "teste",
        administrador: 'true',
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
    })
  });

  it('DELETE - Deletar usuario', () => {
    cy.request({
      method: 'DELETE',
      url: 'http://serverest.dev/usuarios/'+id
    }).then((response) =>{
      expect(response.status).to.equal(200);
    })
  })
})