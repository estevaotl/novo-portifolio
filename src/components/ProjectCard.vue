<script setup lang="ts">
import ProjectVisual from "./ProjectVisual.vue";
import SvgIcon from "./SvgIcon.vue";
import type { Projeto } from "../types/types";
withDefaults(defineProps<{ projeto: Projeto; featured?: boolean }>(), {
  featured: false,
});
defineEmits<{ open: [] }>();
</script>
<template>
  <article class="project-card" :class="{ 'project-featured': featured }">
    <button
      class="project-visual-button"
      type="button"
      :aria-label="`Conhecer o projeto ${projeto.titulo}`"
      @click="$emit('open')"
    >
      <ProjectVisual :project="projeto" /><span class="visual-open"
        ><SvgIcon name="arrow-up-right" :size="22"
      /></span>
    </button>
    <div class="project-card-copy">
      <div class="project-meta">
        <span>{{ projeto.contexto }}</span
        ><span>{{ projeto.categoria }}</span>
      </div>
      <h3>{{ projeto.titulo }}</h3>
      <p>{{ projeto.descricao }}</p>
      <ul class="technology-list" aria-label="Tecnologias utilizadas">
        <li v-for="tech in projeto.tecnologias" :key="tech.nome">
          {{ tech.nome }}
        </li>
      </ul>
      <div class="project-card-actions">
        <button
          class="project-details-button"
          type="button"
          @click="$emit('open')"
        >
          Conhecer o projeto <SvgIcon name="arrow-right" :size="18" /></button
        ><a
          :href="projeto.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Ver código de ${projeto.titulo} no GitHub`"
          ><SvgIcon name="github" :size="19" /> Código</a
        >
      </div>
    </div>
  </article>
</template>
