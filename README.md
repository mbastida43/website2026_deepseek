# Landing Page - Glassmorphism Portfolio

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?logo=css3)
![License](https://img.shields.io/badge/License-MIT-green.svg)

Landing page profissional com efeito glassmorphism, desenvolvida em React. O projeto apresenta uma interface moderna, com elementos translúcidos, animações suaves e uma seção de contato com formulário.

---

## 📸 Preview

A página inclui:

- Background dinâmico com orbs gradientes animados e grid pattern
- Header com nome, cargo e botão de acesso ao contato
- Seção de cards com conteúdo em estilo glassmorphism
- Seção de cultura/identidade do projeto
- Página de contato com formulário para nome, e-mail, assunto e botão Enviar
- Layout responsivo para desktop, tablet e celular

---

## 🚀 Tecnologias Utilizadas

- React 18
- React Router DOM
- CSS3 moderno
- HTML5 semântico
- JavaScript ES6+

---

## 📁 Estrutura do Projeto

```text
website2026_deepseek/
├── LICENSE.md
├── package.json
├── package-lock.json
├── README.md
├── run-website.ps1
├── public/
│   └── index.html
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.js
    └── components/
        ├── CardsSection.css
        ├── CardsSection.jsx
        ├── ContactPage.css
        ├── ContactPage.jsx
        ├── CultureSection.css
        ├── CultureSection.jsx
        ├── GlassPanel.css
        ├── GlassPanel.jsx
        ├── Header.css
        └── Header.jsx
```

## 📄 Arquivos e Função

- LICENSE.md: arquivo de licença do projeto.
- package.json: define as dependências, scripts e configuração do projeto React.
- package-lock.json: lockfile gerado automaticamente para garantir versões consistentes das dependências.
- README.md: documentação do projeto.
- run-website.ps1: script PowerShell para facilitar a execução da aplicação no Windows.
- public/index.html: arquivo HTML principal usado como ponto de entrada da aplicação no navegador.
- src/App.jsx: componente principal que define as rotas da aplicação e organiza as páginas.
- src/App.css: estilos globais da aplicação, incluindo fundo animado, orbs e layout geral.
- src/index.js: ponto de entrada do React que renderiza a aplicação na DOM.
- src/index.css: estilos base e resets globais.
- src/components/CardsSection.jsx: componente responsável pela seção de cards da landing page.
- src/components/CardsSection.css: estilos da seção de cards.
- src/components/ContactPage.jsx: página de contato com formulário de nome, e-mail, assunto e botão Enviar.
- src/components/ContactPage.css: estilos da página de contato.
- src/components/CultureSection.jsx: componente da seção de cultura/identidade da página.
- src/components/CultureSection.css: estilos da seção de cultura.
- src/components/GlassPanel.jsx: componente reutilizável para os painéis com efeito glassmorphism.
- src/components/GlassPanel.css: estilos do componente de painel em vidro.
- src/components/Header.jsx: cabeçalho principal com nome, cargo e link para a página de contato.
- src/components/Header.css: estilos do cabeçalho e dos botões de ação.

---

## ▶️ Como Executar

No diretório do projeto, rode:

```bash
npm install
npm start
```

Ou, no Windows, você pode usar:

```powershell
./run-website.ps1
```
