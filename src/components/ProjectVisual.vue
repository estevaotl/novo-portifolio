<script setup lang="ts">
import SvgIcon from "./SvgIcon.vue";
import type { Projeto } from "../types/types";
defineProps<{ project: Projeto }>();
</script>

<template>
  <div class="project-visual" :class="`visual-${project.visual}`">
    <template v-if="project.visual === 'match' && !project.imagens.length">
      <svg
        class="match-path"
        viewBox="0 0 500 280"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M85 205C85 125 225 200 225 120S365 80 400 48"
          stroke="currentColor"
          stroke-width="2"
          stroke-dasharray="5 7"
        />
        <circle cx="85" cy="205" r="34" stroke="currentColor" />
        <circle cx="400" cy="48" r="30" stroke="currentColor" />
      </svg>
      <div class="match-search">
        <SvgIcon name="pin" :size="23" />
        <div>
          <strong>Encontre por perto.</strong><span>Busca por proximidade</span>
        </div>
      </div>
      <div class="match-profile">
        <div class="profile-illustration">
          <SvgIcon name="code" :size="28" />
        </div>
        <div>
          <b>Prestador de serviço</b><span>Portfólio e avaliações</span>
        </div>
        <SvgIcon name="arrow-up-right" :size="18" />
      </div>
      <div class="match-order">
        <span class="order-dot"></span> Contato e ordem de serviço
        <SvgIcon name="check" :size="16" />
      </div>
      <span class="illustration-label">Fluxo ilustrativo da aplicação</span>
    </template>
    <template v-else-if="project.visual === 'maps'">
      <svg
        class="map-illustration"
        viewBox="0 0 500 310"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 40h500M0 110h500M0 200h500M0 265h500M65 0v310M165 0v310M265 0v310M370 0v310M455 0v310"
          stroke="#cedcdb"
          stroke-width="13"
        />
        <path
          d="M165 205V110H368V44"
          stroke="#153e4b"
          stroke-width="5"
          stroke-linejoin="round"
        />
        <circle
          cx="165"
          cy="205"
          r="9"
          fill="#087f8c"
          stroke="white"
          stroke-width="4"
        />
        <circle
          cx="368"
          cy="44"
          r="9"
          fill="#153e4b"
          stroke="white"
          stroke-width="4"
        />
      </svg>
      <div class="map-label">
        <SvgIcon name="pin" :size="19" />
        <div>
          <strong>Origem e destino</strong><span>Vue.js + Google Maps</span>
        </div>
      </div>
      <span class="illustration-label">Ilustração do estudo de mobilidade</span>
    </template>
    <template v-else>
      <div class="project-browser">
        <div class="browser-bar">
          <span><i></i><i></i><i></i></span
          ><span>{{
            project.visual === "receitas"
              ? "Sistema de receitas"
              : project.visual === "commerce"
                ? "Mini e-commerce"
                : project.titulo
          }}</span
          ><SvgIcon name="code" :size="13" />
        </div>
        <img
          :src="project.imagens[0]"
          :alt="project.imagemAlt || `Captura do projeto ${project.titulo}`"
          loading="lazy"
          width="1100"
          height="650"
        />
      </div>
      <span class="illustration-label">Captura real do projeto</span>
    </template>
  </div>
</template>
