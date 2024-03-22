// @ts-check
const { test, expect } = require('@playwright/test');
const {RegisterPage} = require('./resgister-page');

let registerPage;
let email;

test.beforeEach(async ({ page }) => {
  registerPage = new RegisterPage(page);
  email = "teste"+(Math.floor(Math.random() * 10000))+'@email.com';
  await registerPage.goto();
});

test('Registrar com sucesso', async ({ page }) => {
  /*
    Dado que o usuario esta na página de cadastro
    Quando ele preenche os campos de registro corretamente
    Então a aplicação imprime a mensagem "Your registration completed"
  */
  await registerPage.fillPersonalDetails('Nome Teste', 'Sobrenome Teste', 6, 1, 84, email);
  //preenche o campo de Company Details
  await registerPage.fillCompanyDetails('Empresa Teste');
  //seleciona a Options
  await registerPage.checkOptions(true);
  //preenche os campos de Your Password
  await registerPage.fillPassword("senhaTeste");
  await registerPage.fillConfirmPassword("senhaTeste");
  //clica em Register
  await registerPage.confirmRegistration();
  //valida a mensagem de confirmacao
  await expect(await registerPage.getSuccessMsg()).toBe('Your registration completed');
});

test('Registrar sem sucesso', async ({ page }) => {
  /*
    Dado que o usuario esta na página de cadastro
    Quando ele nao preenche os campos de registro corretamente
    Então a aplicação imprime as mensagens de erro 
  */
  //verifica se todas mensagens de erro de 'campo obrigatorio' aparecem
  await registerPage.confirmRegistration();
  await expect(await registerPage.getErrorMsg('#FirstName-error')).toBe('First name is required.');
  await expect(await registerPage.getErrorMsg('#LastName-error')).toBe( 'Last name is required.');
  await expect(await registerPage.getErrorMsg('#Email-error')).toBe('Email is required.');
  await expect(await registerPage.getErrorMsg('#Password-error')).toBe('Password is required.');

  //verifica se a mensagem de erro de 'email errado' aparece
  let wrongEmail = 'teste'
  await registerPage.fillPersonalDetails('Nome Teste', 'Sobrenome Teste', 6, 1, 84, wrongEmail);
  await registerPage.confirmRegistration();
  await expect(await registerPage.getErrorMsg('#Email-error')).toBe('Wrong email');
  await registerPage.fillPersonalDetails('Nome Teste', 'Sobrenome Teste', 6, 1, 84, email);

  //verifica se a mensagem de erro de 'requisitos minimos da senha' aparece
  await registerPage.fillPassword("1");
  await registerPage.confirmRegistration();
  await expect(await registerPage.getErrorMsg('#Password-error')).toBe('Password must meet the following rules: must have at least 6 characters');

  //verifica se a mensagem de erro de 'senhas devem ser iguais' aparece
  await registerPage.fillPassword("senhaTeste");
  await registerPage.fillConfirmPassword("1");
  await registerPage.confirmRegistration();
  await expect(await registerPage.getErrorMsg('#ConfirmPassword-error')).toBe('The password and confirmation password do not match.');

});