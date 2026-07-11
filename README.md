# Landing Page - Glassmorphism Portfolio

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?logo=css3)
![License](https://img.shields.io/badge/License-MIT-green.svg)

Landing page profissional com efeito **glassmorphism** realista, desenvolvida em React. Apresenta painéis translúcidos com efeito de vidro, design responsivo e animações suaves.

---

## 📸 Preview

A página conta com:

- **Background dinâmico** com orbs gradientes animados e grid pattern
- **Header** com nome e cargo em destaque (texto com gradiente animado)
- **3 Painéis de vidro** (glassmorphism) com efeitos hover:
  - **DevOps** - Automação CI/CD, containers, orquestração
  - **DevSecOps** - Segurança integrada ao ciclo de desenvolvimento
  - **AI** - Inteligência Artificial e Machine Learning
- **Tags de tecnologia** com efeito hover
- **Totalmente responsivo** (Desktop, Tablet, Smartphone)

---

## 🚀 Tecnologias Utilizadas

| Tecnologia       | Descrição                              |
|------------------|----------------------------------------|
| React 18         | Biblioteca JavaScript para UI          |
| CSS3 Moderno     | Glassmorphism, Grid, Flexbox, Animações|
| HTML5 Semântico  | Estrutura acessível e SEO-friendly     |
| Google Fonts     | Fonte Inter (tipografia moderna)       |

### Técnicas Avançadas Aplicadas

- **Glassmorphism**: `backdrop-filter: blur()` com bordas e reflexos
- **Animações GPU-accelerated**: `transform` e `opacity` para performance
- **CSS Grid Responsivo**: Layout adaptativo sem media queries complexas
- **Gradientes Animados**: Efeito shimmer no texto principal
- **CSS Custom Properties**: Variáveis para cores dinâmicas por painel

---

## 📁 Estrutura do Projeto

landing-page-glass/
├── public/
│   └── index.html              # HTML base + Google Fonts
├── src/
│   ├── components/
│   │   ├── CardsSection.jsx    # Seção com os 3 painéis
│   │   ├── CardsSection.css    # Grid responsivo + animações
│   │   ├── GlassPanel.jsx      # Componente do painel de vidro
│   │   ├── GlassPanel.css      # Efeito glassmorphism + hover
│   │   ├── Header.jsx          # Cabeçalho com nome e cargo
│   │   └── Header.css          # Gradientes, tags, animações
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Background animado + orbs
│   ├── index.js                # Ponto de entrada React
│   └── index.css               # Reset global + fonte base
├── package.json                # Dependências e scripts
├── run-website.ps1             # Script PowerShell para setup automático
└── README.md                   # Este arquivo
