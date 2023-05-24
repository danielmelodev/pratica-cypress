# Cypress
O Cypress é uma ferramenta de automação de testes de ponta a ponta fácil de usar e poderosa.
## Pré-requisitos
Certifique-se de ter o Node.js e o NPM (Node Package Manager) instalados em seu sistema antes de prosseguir com a instalação do Cypress.
## Instalação <br>
### Siga as etapas abaixo para instalar o Cypress em seu projeto:

#### 1. Crie um novo diretório para o seu projeto e acesse-o no terminal. <br>
#### 2. Execute o seguinte comando para inicializar um novo projeto Node.js: <br>

~~~
  npm init -y
~~~
#### 3. Instale o Cypress como uma dependência de desenvolvimento executando o seguinte comando:: <br>
~~~
  npm install cypress --save-dev
~~~
Este comando instalará o Cypress e suas dependências no diretório do seu projeto. <br>
## Configuração
Após a instalação do Cypress, você precisará fazer algumas configurações básicas antes de começar a escrever seus testes.

#### 1. No diretório raiz do seu projeto, execute o seguinte comando para abrir o Cypress:
~~~
  npx cypress open
~~~
Isso criará a estrutura de pastas e arquivos necessários para seus testes Cypress.
Na pasta cypress, você encontrará uma pasta chamada **e2e**, onde você pode adicionar seus arquivos de teste. Remova o arquivo de exemplo **example.spec.js** e adicione seus próprios arquivos de teste com a extensão **.spec.js**.

O arquivo de configuração do Cypress chamado **cypress.json** também estará no diretório raiz do seu projeto. Você pode personalizar as configurações conforme necessário, como a URL base do aplicativo a ser testado.

Opcionalmente, você pode adicionar arquivos de **suporte**, como comandos personalizados, plugins e fixtures, nas respectivas pastas **support** e **fixtures**.
## Executando os testes
### Para executar seus testes Cypress, siga as etapas abaixo:

#### 1. Abra o Cypress digitando o seguinte comando no diretório raiz do seu projeto:
~~~
  npx cypress open
~~~
#### 2. O Cypress Test Runner será aberto, exibindo uma lista de arquivos de teste. Clique em um arquivo para executá-lo em um navegador.

#### 3. Para executar todos os testes em segundo plano, sem abrir a interface do Test Runner, execute o seguinte comando:
~~~
  npx cypress run
~~~
#### Isso executará todos os testes no terminal e exibirá os resultados.
