# Site de Avaliação de Filmes

> **Projeto de Estudo** - Este é um projeto desenvolvido para fins de aprendizado e prática de desenvolvimento frontend com React e TypeScript.

Uma plataforma moderna e responsiva para navegação de filmes e séries de TV, construída com React e TypeScript. Navegue por conteúdos em alta, pesquise seus filmes e séries favoritas e explore informações detalhadas sobre elenco, equipe e avaliações.

**Nota:** Este é um projeto **frontend-only** (somente interface). Não possui backend próprio e utiliza diretamente a API pública do TMDB para obter os dados de filmes e séries.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- **Node.js** (v18 ou superior)
- **npm** ou **yarn** gerenciador de pacotes
- Uma **Chave da API TMDB** (veja as instruções de configuração abaixo)

## Começando

### 1. Clone o Repositório

```bash
git clone https://github.com/nicolassm145/movie-rating.git
cd movie-rating
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Obtenha sua Chave da API TMDB

1. Crie uma conta gratuita no [TMDB](https://www.themoviedb.org/signup)
2. Vá para configurações da conta → seção API
3. Solicite uma chave de API (escolha a opção "Developer")
4. Copie sua chave de API

### 4. Configure as Variáveis de Ambiente

Crie um arquivo `.env` no diretório raiz:

```env
VITE_TMDB_API_KEY=sua_chave_api_aqui
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

Substitua `sua_chave_api_aqui` pela sua chave real da API TMDB.

### 5. Execute o Servidor de Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## Estrutura do Projeto

```
movie-rating/
├── public/              # Assets estáticos
├── src/
│   ├── assets/         # Imagens, ícones, etc.
│   ├── components/     # Componentes React reutilizáveis
│   │   ├── Layout/     # Componentes de layout
│   │   └── ...         # Componentes de funcionalidades
│   ├── pages/          # Componentes de páginas
│   │   ├── Home/
│   │   ├── Movie/
│   │   ├── Tvshow/
│   │   ├── Search/
│   │   ├── Auth/
│   │   └── ...
│   ├── routes/         # Configuração do React Router
│   ├── types/          # Definições de tipos TypeScript
│   ├── App.tsx         # Componente principal da aplicação
│   ├── main.tsx        # Ponto de entrada da aplicação
│   └── index.css       # Estilos globais
├── .env                # Variáveis de ambiente (crie este arquivo)
├── package.json        # Dependências do projeto
├── vite.config.ts      # Configuração do Vite
├── tailwind.config.js  # Configuração do Tailwind CSS
└── tsconfig.json       # Configuração do TypeScript
```

## Páginas

- **Home** - Página inicial com conteúdo em alta
- **Movie** - Página de detalhes do filme
- **TV Show** - Página de detalhes da série de TV
- **Search** - Página de resultados de busca
- **Credits** - Informações de elenco e equipe
- **Profile** - Página de perfil do usuário
- **Auth** - Páginas de login e registro
- **Year** - Navegue conteúdo por ano
- **About** - Informações sobre o projeto

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
