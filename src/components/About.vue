<script setup lang="ts">
import SvgIcon from "./SvgIcon.vue";
</script>
<template>
  <section
    id="sobre"
    class="about-section container"
    aria-labelledby="about-title"
  >
    <div class="about-portrait">
      <div class="portrait-frame">
        <img
          src="/images/estevao-retrato-v2.webp"
          alt="Estêvão Tiengo Leite"
          width="1024"
          height="1536"
          loading="lazy"
        />
      </div>
      <span class="portrait-caption">Prazer, Estêvão.</span>
    </div>
    <div class="about-copy">
      <h2 id="about-title">Gosto de entender<br />o problema inteiro.</h2>
      <p>
        Sou Estêvão Tiengo Leite, desenvolvedor Full Stack e bacharel em
        Sistemas de Informação pelo CEFET-RJ, campus Nova Friburgo.
      </p>
      <p>
        Minha experiência passa pela interface, pelas regras de negócio e pelo
        banco de dados. No trabalho, isso significa olhar para o sistema como um
        todo: o que a pessoa precisa fazer, como os dados se conectam e onde o
        desempenho pode melhorar.
      </p>
      <div class="about-facts">
        <div>
          <SvgIcon name="layers" :size="20" /><span
            ><strong>PHP, Laravel e Vue.js</strong>Minha stack principal
            hoje.</span
          >
        </div>
        <div>
          <SvgIcon name="code" :size="20" /><span
            ><strong>Desde maio de 2021</strong>Experiência profissional em
            desenvolvimento.</span
          >
        </div>
      </div>
      <p class="education-note">
        CEFET-RJ / Curso concluído em 2023.<br />Colação de grau em março de
        2024.
      </p>
    </div>
  </section>
</template>
