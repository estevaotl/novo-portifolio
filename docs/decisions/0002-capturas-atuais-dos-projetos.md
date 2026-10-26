# ADR-0002: Apresentar as versões atuais dos projetos com capturas reais

- Data: 2026-10-26
- Status: Accepted

## Contexto

O Sistema de receitas evoluiu para a Mesa, e o Mini e-commerce recebeu a identidade Nuvix e novas telas de loja e gestão. As capturas antigas do portfólio já não representavam essas aplicações. O usuário indicou as pastas `docs` dos projetos locais como fonte das imagens.

## Decisão

Usar capturas reais de `docs/images/aplicacao` nos dois projetos, com a página inicial como capa e uma seleção de telas que mostra o uso da aplicação, a gestão e a adaptação ao celular. Preservar os títulos conhecidos no portfólio e explicar as identidades Mesa e Nuvix nas descrições.

Copiar as imagens para o próprio portfólio, convertidas para WebP e sem alterar suas proporções. Não depender da disponibilidade das pastas vizinhas na publicação. A atualização é manual, a partir das capturas dos projetos de origem.

| Projeto local de origem | Capturas selecionadas |
| --- | --- |
| `../projeto-laravel-receitas-a4pm/docs/images/aplicacao` | Página inicial, caderno, modo cozinhar, nova receita, impressão e caderno no celular |
| `../mini-ecommerce/docs/images/aplicacao` | Vitrine, catálogo, produto, sacola, entrega, gestão de produtos, cupons, pedidos e catálogo no celular |

Cada captura tem uma legenda específica, usada também como texto alternativo. A galeria mantém navegação manual e oferece a imagem completa em nova aba para leitura das telas longas.

## Consequências

- O portfólio apresenta as interfaces atuais, acompanhadas de descrições coerentes com as funcionalidades documentadas.
- A publicação contém suas próprias imagens e não precisa executar os outros projetos.
- Novas atualizações das aplicações exigem revisar capas, galerias e textos.
- Match Serviços permanece como estava, conforme orientação do usuário. Suas capturas foram adiadas; nenhum diagrama deve ser apresentado como captura real.

## Referências

- [Dados dos projetos](../../public/projetos.json)
- [Galeria de detalhes](../../src/components/ProjectDialog.vue)
- [Tipos de conteúdo](../../src/types/types.ts)
