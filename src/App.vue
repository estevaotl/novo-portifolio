<script setup lang="ts">
import SiteNav from "./components/SiteNav.vue";
import Header from "./components/Header.vue";
import Project from "./components/Project.vue";
import Experience from "./components/Experience.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <SiteNav />
  <main id="conteudo">
    <Header /><Project /><Experience /><About /><Footer />
  </main>
  <footer class="site-footer container">
    <a class="footer-name" href="#inicio">Estêvão Tiengo Leite</a
    ><span>Feito com Vue.js e atenção aos detalhes.</span
    ><a href="#inicio">Voltar ao início ↑</a>
  </footer>
</template>
