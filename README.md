Finance Dashboard

Um dashboard simples para controle financeiro pessoal, feito com React, Vite e Tailwind CSS.

Os dados ficam salvos no navegador usando "localStorage", então continuam lá mesmo depois de atualizar a página.

Funcionalidades

- Visualizar saldo, receitas e despesas.
- Adicionar receitas e despesas.
- Informar descrição, valor e categoria.
- Ver o histórico de transações.
- Excluir transações.

Tecnologias utilizadas

- React
- Vite
- Tailwind CSS

Como executar o projeto

É necessário ter o "Node.js" (https://nodejs.org/) instalado.

# Clonar o projeto
git clone https://github.com/SEU-USUARIO/finance-dashboard.git

# Entrar na pasta
cd finance-dashboard

# Instalar dependências
npm install

# Iniciar o projeto
npm run dev

Depois, é só acessar o endereço que aparecer no terminal, geralmente "http://localhost:5173".

Comandos disponíveis

Comando| Função
"npm run dev"| Inicia o projeto
"npm run build"| Gera a versão de produção
"npm run preview"| Visualiza a versão de produção

Estrutura do projeto

src/
├── components/
│   ├── Summary.jsx
│   ├── TransactionForm.jsx
│   └── TransactionList.jsx
├── hooks/
│   └── useLocalStorage.js
├── utils/
│   └── format.js
├── App.jsx
├── index.css
└── main.jsx

Melhorias futuras

- Adicionar gráficos de despesas.
- Filtrar transações por mês.
- Exportar dados para CSV.

Licença

MIT
