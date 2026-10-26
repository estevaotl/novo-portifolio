<script setup lang="ts">
import SvgIcon from "./SvgIcon.vue";
</script>
<template>
  <section
    id="trajetoria"
    class="experience-section"
    aria-labelledby="experience-title"
  >
    <div class="container">
      <div class="section-heading experience-heading">
        <h2 id="experience-title">Código que faz<br />diferença na prática.</h2>
        <p>
          Desde maio de 2021, construindo e evoluindo aplicações em e-commerce,
          marketing digital e saúde.
        </p>
      </div>
      <div class="impact-grid">
        <article class="impact-feature">
          <div class="impact-topline">
            <span>Wx3</span><span>Desempenho / Liderança técnica</span>
          </div>
          <p class="impact-number">
            até <strong>90<span>%</span></strong>
          </p>
          <h3>menos tempo nas consultas.</h3>
          <p>
            Durante minha liderança, otimizei consultas ao banco de dados e
            reduzi em até 90% o tempo de execução.
          </p>
          <div class="query-visual" aria-hidden="true">
            <div><span>Antes</span><i></i></div>
            <div><span>Depois</span><i></i></div>
          </div>
          <span class="impact-footnote"
            >Redução máxima relatada nas consultas otimizadas.</span
          >
        </article>
        <div class="impact-secondary">
          <article class="impact-event">
            <span class="company-name">Digienge</span>
            <h3>Estrutura para um evento de <span>R$ 1 milhão.</span></h3>
            <p>
              Implementei melhorias de desempenho e estabilidade para sustentar
              o volume de acessos de um único evento que movimentou esse valor.
              Também atuei na otimização de consultas e na migração para AWS.
            </p>
            <span class="impact-context"
              >Minha contribuição: capacidade e estabilidade da
              plataforma.</span
            >
          </article>
          <article class="impact-current">
            <div class="current-icon"><SvgIcon name="code" :size="24" /></div>
            <div>
              <span class="company-name">Atuação atual / A4PM</span>
              <h3>Tecnologia a serviço da saúde.</h3>
              <p>
                Desenvolvimento e sustentação de um Prontuário Eletrônico do
                Paciente para Atenção Básica.
              </p>
            </div>
          </article>
        </div>
      </div>
      <div class="experience-note">
        <span>Liderança de equipes de 2 e 4 desenvolvedores.</span
        ><a
          href="https://www.linkedin.com/in/estevao-leite/"
          target="_blank"
          rel="noopener noreferrer"
          >Minha trajetória no LinkedIn
          <SvgIcon name="arrow-up-right" :size="18"
        /></a>
      </div>
    </div>
  </section>
</template>
