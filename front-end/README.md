# Setup Inicial

## Pré-requisitos

### Instalar o Node.js

Como o Playwright é executado no Node.js, primeiro precisamos instalar o Node.js. Para baixar, basta acessar o link: https://nodejs.org/en/download e selecionar a versão e o sistema operacional que você utiliza. Após realizado o download, seguir os passos para instalar.

### Instalar a IDE

Para realizar o desafio, eu utilizei o Visual Studio Code (VSCode). Para baixar, basta acessar o link: https://code.visualstudio.com/download e selecionar o sistema operacional que você utiliza. Após realizado o download, é só seguir os passos da instalação.

## Iniciando o projeto Playwright

Para iniciar um projeto Playwright, basta seguir os seguintes passos:
1. Abrir o VS Code
2. Selecionar a pasta desejada para armazenamento do projeto ou criar uma nova
3. Abrir a pasta
4. Abrir o terminal pelo VS Code. Para isso, clicar em 'Terminal' no topo da janela e depois clicar em 'New Terminal' (Novo Terminal)
5. No terminal, digite o comando npx playwright init
6. Siga as instruções fornecidas no terminal para inicializar o projeto
   - Escolha a estrutura do projeto: linguagem, pasta dos testes, navegadores e a integração com o GitHub Actions
   - Para este desafio, recomenda-se a linguagem  JavaScript, instalar os navegadores padrão, aceitar a pasta padrão (tests) e negar a integração.
7. A instalação deve  ser concluída e você poderá ver que foi gerada uma estrutura básica
   - Qualquer dúvida ou dificuldade, é possível acessar a documentação do Playwright (https://playwright.dev/docs/intro) e seguir os passos descritos lá.

Para verificar se a instalação ocorreu corretamente, execute o comando npx playwright test no terminal. Este comando executa o teste exemplo do Playwriht, e se tudo deu certo, você poderá ver os resultados e logs no terminal.