<script setup lang="ts">
import { computed, onMounted, ref, shallowRef } from "vue";
import ProjectCard from "./ProjectCard.vue";
import ProjectDialog from "./ProjectDialog.vue";
import SvgIcon from "./SvgIcon.vue";
import type { Categoria, Projeto } from "../types/types";
const projetos = shallowRef<Projeto[]>([]);
const loading = ref(true);
const error = ref(false);
const filter = ref<Categoria | "Todos">("Todos");
const selectedProject = shallowRef<Projeto | null>(null);
const filters = ["Todos", "Full Stack", "Back-end", "Front-end"] as const;
const filtered = computed(() =>
  projetos.value.filter(
    (p) =>
      p.destaque && (filter.value === "Todos" || p.categoria === filter.value),
  ),
);
const experiments = computed(() => projetos.value.filter((p) => !p.destaque));
async function loadProjects() {
  loading.value = true;
  error.value = false;
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}projetos.json`);
    if (!response.ok) throw new Error("Falha ao carregar os projetos");
    const data: unknown = await response.json();
    if (
      !Array.isArray(data) ||
      !data.every(
        (p) =>
          typeof p?.titulo === "string" &&
          Array.isArray(p.tecnologias) &&
          Array.isArray(p.imagens),
      )
    )
      throw new Error("Formato inválido");
    projetos.value = data as Projeto[];
  } catch {
    error.value = true;
  } finally {
    loading.value = false;
  }
}
onMounted(loadProjects);
</script>
<template>
  <section
    id="projetos"
    class="projects-section container"
    aria-labelledby="projects-title"
  >
    <div class="section-heading">
      <div>
        <p class="section-context">Do problema à aplicação.</p>
        <h2 id="projects-title">Algumas coisas<br />que eu construí.</h2>
      </div>
      <p>Projetos que mostram como conecto<br />interface, lógica e dados.</p>
    </div>
    <div class="project-toolbar">
      <div
        class="project-filters"
        role="group"
        aria-label="Filtrar projetos por área"
      >
        <button
          v-for="item in filters"
          :key="item"
          type="button"
          :aria-pressed="filter === item"
          :class="{ active: filter === item }"
          @click="filter = item"
        >
          {{ item }}
        </button>
      </div>
      <span class="project-count" aria-live="polite">{{
        loading
          ? "Carregando projetos…"
          : error
            ? ""
            : `${filtered.length} projetos selecionados`
      }}</span>
    </div>
    <div v-if="loading" class="project-loading" role="status">
      Carregando meus projetos…
    </div>
    <div v-else-if="error" class="project-error" role="alert">
      <p>Não foi possível carregar os projetos.</p>
      <button class="button button-primary" type="button" @click="loadProjects">
        Tentar novamente
      </button>
    </div>
    <div v-else class="project-grid">
      <ProjectCard
        v-for="projeto in filtered"
        :key="projeto.id"
        :projeto="projeto"
        :featured="filter === 'Todos' && projeto.id === 7"
        @open="selectedProject = projeto"
      />
    </div>
    <details v-if="experiments.length" class="experiments">
      <summary>
        Mais projetos e experimentos <span>{{ experiments.length }}</span
        ><SvgIcon name="arrow-down" :size="18" />
      </summary>
      <div class="experiment-list">
        <a
          v-for="project in experiments"
          :key="project.id"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          ><div>
            <strong>{{ project.titulo }}</strong
            ><span>{{
              project.tecnologias.map((t) => t.nome).join(", ")
            }}</span>
          </div>
          <SvgIcon name="arrow-up-right" :size="20"
        /></a>
      </div>
    </details>
    <ProjectDialog :project="selectedProject" @close="selectedProject = null" />
  </section>
</template>
