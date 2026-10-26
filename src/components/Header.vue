<script setup lang="ts">
import SystemLayers from "./SystemLayers.vue";
import SvgIcon from "./SvgIcon.vue";
import ReadingProgress from "./ReadingProgress.vue";
</script>

<template>
  <ReadingProgress />
  <div class="hero-canvas">
    <section id="inicio" class="hero container" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="hero-introduction">
          <span class="intro-line"></span> Estêvão Leite / Desenvolvedor Full
          Stack
        </p>
        <h1 id="hero-title">Uma boa<br />interface é<br />só o começo.</h1>
        <p class="hero-description">
          Construo aplicações por inteiro. Da experiência na tela à estrutura
          que faz tudo funcionar, com <strong>PHP, Laravel e Vue.js.</strong>
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#projetos"
            >Explore meus projetos <SvgIcon name="arrow-down" :size="18" /></a
          ><a
            class="hero-github"
            href="https://github.com/estevaotl"
            target="_blank"
            rel="noopener noreferrer"
            ><SvgIcon name="github" :size="20" /> GitHub
            <SvgIcon name="arrow-up-right" :size="15"
          /></a>
        </div>
        <p class="opportunity-note">
          <span></span> Interesse em oportunidades remotas no Brasil
        </p>
      </div>
      <SystemLayers />
      <div class="hero-bottom">
        <span>Da primeira interação à última consulta.</span
        ><a href="#projetos"
          >Conheça o meu trabalho <SvgIcon name="arrow-down" :size="16"
        /></a>
      </div>
    </section>
  </div>
  <div class="stack-strip" aria-label="Stack atual">
    <div class="container stack-inner">
      <span>Minha stack</span>
      <ul>
        <li>PHP</li>
        <li>Laravel</li>
        <li>Vue.js</li>
        <li>JavaScript</li>
        <li>MySQL</li>
        <li>Docker</li>
      </ul>
      <SvgIcon name="layers" :size="24" />
    </div>
  </div>
</template>
