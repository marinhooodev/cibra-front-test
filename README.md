
# Cibra Front Test 🚀

Este é o repositório do projeto de teste para a vaga de Front-end. O projeto foi desenvolvido com as tecnologias mais recentes e voltado para a criação de uma aplicação simples de gerenciamento de usuários.

## Tecnologias Utilizadas 🛠️

- **React ⚛️**: Biblioteca JavaScript para construção de interfaces de usuário interativas e dinâmicas.
- **Next.js 📦**: Framework React para construção de aplicações com renderização do lado do servidor (SSR), geração de páginas estáticas (SSG) e criação de APIs RESTful.
- **TypeScript 🔵**: Superset do JavaScript que adiciona tipagem estática, garantindo maior segurança no desenvolvimento.
- **Tailwind CSS 🌊**: Framework CSS utilitário, que oferece classes pré-definidas para construir designs rapidamente.
- **Sass  🧵**: Pré-processador CSS que permite o uso de variáveis, aninhamento e outras funcionalidades avançadas para facilitar a escrita de estilos.
- **CSS Modules 💻**: Técnica para escopo local de CSS, evitando conflitos entre classes e permitindo um estilo modular e reutilizável.
- **React Hook Form 📝**: Biblioteca para gerenciar formulários em React com foco em simplicidade e performance.
- **Radix UI 📱**: Conjunto de componentes acessíveis e estilizados para React, que facilita a construção de UIs com um bom controle de acessibilidade e personalização.
- **Yarn 🧶**: Gerenciador de pacotes para JavaScript, utilizado para controlar as dependências do projeto.
- **react-hot-toast 🔥**: Biblioteca para mostrar notificações de forma simples e sem configurações complexas.
- **react-icons 🎨**: Conjunto de ícones para facilitar a inclusão de ícones em sua aplicação.
- **Cypress 🧪**: Framework de testes end-to-end para garantir o funcionamento correto das funcionalidades da aplicação.

## Funcionalidades Implementadas⚡

- **Listagem de Usuários 📋**: Exibe uma lista de usuários com informações de nome, empresa e outras características.
- **Criação de Usuários 🆕**: Permite adicionar um novo usuário utilizando um formulário validado com `React Hook Form` e persistente via `localStorage`.
- **Deleção de Usuários 🗑️**: Funcionalidade para remover um usuário da lista, com confirmação de ação.
- **Barra de Pesquisa 🔍**: Implementação de uma barra de pesquisa que permite filtrar os usuários pelo nome, proporcionando uma navegação mais eficiente.
- **Persistência com LocalStorage 💾**: Os usuários são armazenados no `localStorage`, garantindo que a lista de usuários persista mesmo após o recarregamento da página.
- **Responsividade e Mobile-First 📱**: A aplicação foi desenvolvida com uma abordagem mobile-first, utilizando o Tailwind CSS para garantir uma boa experiência em diferentes dispositivos, começando sempre pela experiência móvel.
- **Testes End-to-End com Cypress 🧪**: A aplicação conta com testes end-to-end utilizando Cypress para garantir que as funcionalidades principais estejam funcionando corretamente.


## Testes End-to-End com Cypress 🧪

Para garantir que o fluxo da aplicação esteja funcionando corretamente, implementei testes end-to-end utilizando o Cypress. O Cypress é uma poderosa ferramenta para testar a aplicação de ponta a ponta, garantindo que as interações do usuário estejam funcionando conforme esperado.

### Como executar os testes:

1. Certifique-se de ter as dependências instaladas, caso ainda não tenha feito isso:

   ```bash
   yarn install
   ```

2. Para rodar os testes end-to-end, execute o seguinte comando:

   ```bash
   yarn cypress open
   ```

3. O Cypress será aberto em modo interativo. Selecione o arquivo `form.cy.ts` para rodar os testes que verificam a criação de usuários e validações do formulário.


## Demo 🎬

Confira a aplicação em funcionamento na <a href="https://cibra-front-test.vercel.app" target="_blank">Demo</a>.

## Como Rodar 💻

1. Clone o repositório:

```bash
git clone https://github.com/marinhooodev/cibra-front-test.git
```

2. Navegue até o diretório do projeto:

```bash
cd cibra-front-test
```

3. Instale as dependências com o Yarn:

```bash
yarn install
```

4. Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

Acesse a aplicação em `http://localhost:5173` 🌐.

## Estrutura do Projeto 🏗️

- **pages**: Contém as páginas principais da aplicação, como a listagem de usuários e a criação de novos usuários.
- **components**: Contém componentes reutilizáveis, como o `UserCard`.
- **services**: Funções auxiliares para interagir com os dados, como adicionar e deletar usuários.
- **@types**: Tipagens do TypeScript para os dados manipulados, como a interface `IUser`.

## Notas Finais 🎉

Este projeto foi feito com foco na eficiência e simplicidade, utilizando boas práticas de desenvolvimento e garantindo que a aplicação seja acessível e responsiva. A escolha das tecnologias foi feita com base nas tecnologias solicitadas pelo teste, como **React**, **Next.js**, **TypeScript**, **Tailwind CSS**, **React Hook Form**, **Radix UI** e **Yarn**, além de outras ferramentas que garantem performance e boa experiência ao usuário.


Para quaisquer dúvidas ou melhorias, fique à vontade para abrir uma issue ou enviar um pull request.

Obrigado pela oportunidade de participar deste processo seletivo!

