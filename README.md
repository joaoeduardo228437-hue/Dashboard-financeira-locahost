# 💰 Finance Dashboard

Dashboard financeiro pessoal feito com **React**, **Vite** e **Tailwind CSS v4**.
Os dados ficam salvos no `localStorage` do navegador, então não somem ao dar F5.

## Funcionalidades

- Resumo no topo com saldo total, receitas e despesas
- Formulário para adicionar transações (receita/despesa, valor, descrição e categoria)
- Histórico de transações com opção de apagar itens
- Persistência automática no navegador

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 20.19 ou superior.

```bash
# 1. clonar o repositório (ou abrir a pasta do projeto)
git clone https://github.com/SEU-USUARIO/finance-dashboard.git
cd finance-dashboard

# 2. instalar as dependências
npm install

# 3. iniciar o servidor de desenvolvimento
npm run dev
```

Abra no navegador o endereço mostrado no terminal (normalmente http://localhost:5173).

## Scripts

| Comando           | Descrição                    |
| ----------------- | ---------------------------- |
| `npm run dev`     | Servidor de desenvolvimento  |
| `npm run build`   | Gera a build de produção     |
| `npm run preview` | Visualiza a build localmente |

## Estrutura de pastas

```
finance-dashboard/
├── src/
│   ├── components/
│   │   ├── Summary.jsx
│   │   ├── TransactionForm.jsx
│   │   └── TransactionList.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   └── format.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Subindo para o GitHub

1. No GitHub, crie um repositório **vazio** chamado `finance-dashboard`
   (sem README, `.gitignore` ou licença).
2. Na pasta do projeto, rode:

```bash
git init
git add .
git commit -m "feat: dashboard financeiro inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/finance-dashboard.git
git push -u origin main
```

Se o Git pedir senha no `push`, use um **Personal Access Token**
(GitHub → Settings → Developer settings → Personal access tokens) no lugar da senha,
ou autentique com o GitHub CLI: `gh auth login`.

## Próximas ideias

- Gráfico de despesas por categoria
- Filtro por mês e por tipo
- Exportar transações em CSV
- Deploy gratuito na Vercel ou Netlify

## Licença

MIT
