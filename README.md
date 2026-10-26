# Portfólio de Estêvão Leite

Portfólio pessoal em Vue 3 e TypeScript, com foco na atuação Full Stack com PHP, Laravel e Vue.js.

A direção visual **Sistema por dentro** apresenta uma aplicação em quatro camadas interativas: interface, aplicação, dados e ambiente. Os projetos selecionados mostram contexto, desafio, solução, tecnologias e capturas; os resultados profissionais aparecem com suas empresas e responsabilidades.

A versão expressiva usa cobalto, laranja e azul profundo, com entrada animada das camadas, controle para juntar e separar a aplicação e indicador da posição de leitura. A variação está em `src/styles/expressive.css`; o plano está em `docs/versao-expressiva.md`.

## Executar localmente

Requisitos: Node.js 20.19+ ou 22.12+ e npm.

```sh
npm ci
npm run dev
```

Para gerar e conferir a versão de produção:

```sh
npm run build
npm run preview
```

O comando de build verifica os tipos com `vue-tsc` antes de gerar os arquivos de produção.

## Atualizar o conteúdo

- `public/projetos.json`: projetos, tecnologias, categorias, capturas e textos dos detalhes. `destaque: true` exibe o projeto na seleção principal; os demais ficam em “Mais projetos e experimentos”.
- `src/components/Header.vue`: apresentação e foco profissional.
- `src/components/Experience.vue`: resultados profissionais e atuação atual.
- `src/components/About.vue`: apresentação e formação.
- `src/components/Footer.vue`: e-mail e redes de contato.
- `src/style.css`: identidade visual, componentes e regras responsivas.
- `docs/direcao-visual.md`: conceito e fontes de conteúdo.

Receitas (Mesa), Match Serviços e Mini e-commerce (Nuvix) usam capturas atuais das pastas `docs/images/aplicacao` dos respectivos projetos, otimizadas em WebP. As galerias incluem legendas por tela e acesso à imagem completa. Origem e seleção das capturas: [ADR-0002](docs/decisions/0002-capturas-atuais-dos-projetos.md) e [ADR-0003](docs/decisions/0003-capturas-match-servicos.md). As telas do Match com dados fictícios são identificadas como demonstração. Uber Clone usa um diagrama identificado como ilustração. Os seis projetos originais foram preservados entre os destaques e experimentos.

## Interação e acessibilidade

Filtros por área, detalhes em diálogo nativo, galeria manual, menu no celular e cópia de e-mail com retorno de status. Há foco visível, link para pular ao conteúdo e respeito à preferência por movimento reduzido. O diálogo permite fechar por Escape e retorna o foco ao botão que o abriu.

As fontes Bricolage Grotesque e DM Sans são servidas localmente; as respectivas licenças OFL estão em `public/fonts`.

## Publicação

O build produz a pasta `dist`, pronta para hospedagem estática. No Netlify, use `npm run build` como comando e `dist` como diretório de publicação. Os metadados de compartilhamento em `index.html` consideram o endereço oficial `https://estevao-portifolio.netlify.app`; atualize esse domínio caso o endereço mude.

## Autor

Estêvão Tiengo Leite — [LinkedIn](https://www.linkedin.com/in/estevao-leite/) / [GitHub](https://github.com/estevaotl)

Licença MIT.
