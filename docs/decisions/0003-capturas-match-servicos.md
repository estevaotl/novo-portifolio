# ADR-0003: Incorporar as capturas atuais do Match Serviços

- Data: 2026-10-26
- Status: Accepted
- Complementa: ADR-0002; resolve a pendência das capturas do Match Serviços.

## Contexto

Após a atualização de Receitas e Mini e-commerce, o usuário disponibilizou as capturas do Match Serviços em `../match-servicos/docs/images/aplicacao`. O portfólio ainda mostrava um diagrama ilustrativo desse projeto.

## Decisão

Aplicar ao Match o padrão de capturas reais definido no ADR-0002: capa com a página inicial, imagens WebP locais, legendas por tela, navegação manual e acesso à imagem completa.

A seleção inclui início, busca, perfil profissional, login, conta do cliente, conta do profissional, acompanhamento de serviços, fotos e portfólio e busca no celular. As imagens completas preservam o conteúdo e as proporções dos arquivos originais.

Os dados de perfis e contas são demonstrações locais, conforme a documentação das capturas no projeto de origem. Identificar isso nas legendas e na descrição dos detalhes. As imagens documentam a interface, sem afirmar validação integrada da API ou avaliações reais que a API atual não fornece.

## Consequências

- Match Serviços passa a apresentar sua interface atual, no mesmo padrão dos outros dois projetos.
- O diagrama permanece apenas como alternativa quando o projeto estiver sem imagens.
- A pendência de capturas do Match foi concluída; futuras trocas seguem o processo manual já definido.

## Referências

- [Política e origem das capturas](0002-capturas-atuais-dos-projetos.md)
- [Dados dos projetos](../../public/projetos.json)
- [Capas dos projetos](../../src/components/ProjectVisual.vue)
