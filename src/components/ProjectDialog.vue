<script setup lang="ts">
import { computed, nextTick, onUnmounted, ref, shallowRef, watch } from "vue";
import ProjectVisual from "./ProjectVisual.vue";
import SvgIcon from "./SvgIcon.vue";
import type { Projeto } from "../types/types";
const props = defineProps<{ project: Projeto | null }>();
const emit = defineEmits<{ close: [] }>();
const dialog = shallowRef<HTMLDialogElement | null>(null);
const imageIndex = ref(0);
const imageCaption = computed(
  () =>
    props.project?.legendasImagens?.[imageIndex.value] ||
    `${props.project?.imagemAlt || props.project?.titulo}, captura ${imageIndex.value + 1} de ${props.project?.imagens.length}`,
);
let previousOverflow: string | null = null;

function restoreScroll() {
  if (previousOverflow !== null) {
    document.body.style.overflow = previousOverflow;
    previousOverflow = null;
  }
}
watch(
  () => props.project,
  async (project) => {
    imageIndex.value = 0;
    if (project) {
      await nextTick();
      if (!props.project || !dialog.value) return;
      if (!dialog.value.open) {
        previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        dialog.value.showModal();
      }
    } else {
      dialog.value?.close();
      restoreScroll();
    }
  },
);
function backdropClick(event: MouseEvent) {
  if (event.target === dialog.value) emit("close");
}
function changeImage(direction: number) {
  const length = props.project?.imagens.length ?? 0;
  if (length)
    imageIndex.value = (imageIndex.value + direction + length) % length;
}
onUnmounted(restoreScroll);
</script>

<template>
  <dialog
    ref="dialog"
    class="project-dialog"
    aria-labelledby="dialog-title"
    @cancel.prevent="emit('close')"
    @click="backdropClick"
  >
    <div v-if="project" class="dialog-shell">
      <div class="dialog-topbar">
        <span>{{ project.contexto }} / {{ project.categoria }}</span
        ><button
          class="icon-button"
          type="button"
          aria-label="Fechar detalhes do projeto"
          autofocus
          @click="emit('close')"
        >
          <SvgIcon name="close" :size="23" />
        </button>
      </div>
      <div class="dialog-content">
        <h2 id="dialog-title">{{ project.titulo }}</h2>
        <p class="dialog-description">{{ project.descricao }}</p>
        <ul class="technology-list">
          <li v-for="tech in project.tecnologias" :key="tech.nome">
            {{ tech.nome }}
          </li>
        </ul>
        <figure v-if="project.imagens.length" class="dialog-gallery">
          <img
            :src="project.imagens[imageIndex]"
            :alt="imageCaption"
            width="1100"
            height="650"
            decoding="async"
          />
          <figcaption class="gallery-caption">
            <p aria-live="polite">{{ imageCaption }}</p>
            <a
              :href="project.imagens[imageIndex]"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Ampliar captura em nova aba: ${imageCaption}`"
            >
              Ampliar captura <SvgIcon name="arrow-up-right" :size="16" />
            </a>
          </figcaption>
          <div v-if="project.imagens.length > 1" class="gallery-controls">
            <button
              class="icon-button"
              type="button"
              aria-label="Captura anterior"
              @click="changeImage(-1)"
            >
              <SvgIcon name="chevron-left" /></button
            ><span aria-live="polite"
              >{{ imageIndex + 1 }} / {{ project.imagens.length }}</span
            ><button
              class="icon-button"
              type="button"
              aria-label="Próxima captura"
              @click="changeImage(1)"
            >
              <SvgIcon name="chevron-right" />
            </button>
          </div>
        </figure>
        <ProjectVisual v-else :project="project" />
        <div class="case-columns">
          <div>
            <h3>O desafio</h3>
            <p>{{ project.desafio }}</p>
          </div>
          <div>
            <h3>A solução</h3>
            <p>{{ project.solucao }}</p>
          </div>
        </div>
        <h3>O que está no projeto</h3>
        <ul class="deliverable-list">
          <li v-for="item in project.entregas" :key="item">
            <SvgIcon name="check" :size="17" />{{ item }}
          </li>
        </ul>
        <a
          class="button button-primary dialog-repository"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          ><SvgIcon name="github" :size="18" /> Explorar o repositório
          <SvgIcon name="arrow-up-right" :size="18"
        /></a>
      </div>
    </div>
  </dialog>
</template>
