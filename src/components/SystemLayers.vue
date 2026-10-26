<script setup lang="ts">
import { ref } from "vue";
import SvgIcon from "./SvgIcon.vue";
const active = ref(0);
const assembled = ref(false);
function selectLayer(index: number) {
  active.value = index;
  assembled.value = false;
}
const layers = [
  {
    name: "Interface",
    technology: "Vue.js",
    icon: "layers" as const,
    text: "Componentes que conectam as pessoas ao produto. Clareza na tela, cuidado na interação.",
  },
  {
    name: "Aplicação",
    technology: "PHP + Laravel",
    icon: "code" as const,
    text: "Regras de negócio, autenticação e APIs. A lógica que transforma uma interação em uma entrega.",
  },
  {
    name: "Dados",
    technology: "MySQL",
    icon: "database" as const,
    text: "Consultas bem estruturadas e dados consistentes. Desempenho começa nas decisões de arquitetura.",
  },
  {
    name: "Ambiente",
    technology: "Docker",
    icon: "server" as const,
    text: "Ambientes reproduzíveis para desenvolver e executar aplicações com menos diferenças entre máquinas.",
  },
];
</script>

<template>
  <div class="system-explorer">
    <div
      class="system-stage"
      :class="[`selected-layer-${active}`, { 'is-assembled': assembled }]"
      aria-hidden="true"
    >
      <div class="system-orbit orbit-one"></div>
      <div class="system-orbit orbit-two"></div>
      <div class="system-axis"></div>
      <div
        v-for="(layer, index) in layers"
        :key="layer.name"
        class="plane-shell"
        :class="`plane-shell-${index}`"
        :style="{
          '--layer-index': index,
          '--entrance-delay': `${(3 - index) * 90 + 100}ms`,
        }"
      >
        <div
          class="system-plane"
          :class="[`plane-${index}`, { 'plane-active': active === index }]"
        >
          <div class="plane-heading">
            <SvgIcon :name="layer.icon" :size="18" /><span>{{
              layer.technology
            }}</span
            ><span class="plane-bolt">+</span>
          </div>
          <template v-if="index === 0"
            ><div class="mini-app">
              <div class="mini-sidebar"><b></b><i></i><i></i><i></i></div>
              <div class="mini-content">
                <div class="mini-title"></div>
                <div class="mini-subtitle"></div>
                <div class="mini-grid">
                  <div v-for="n in 3" :key="n"><span></span><i></i><i></i></div>
                </div>
              </div></div
          ></template>
          <template v-else-if="index === 1"
            ><div class="logic-flow">
              <span>request</span><i></i><span>controller</span><i></i
              ><span>response</span>
            </div>
            <div class="logic-lines"><i></i><i></i><i></i></div
          ></template>
          <template v-else-if="index === 2"
            ><div class="data-tables">
              <div v-for="n in 3" :key="n">
                <b></b><i></i><i></i><i></i>
              </div></div
          ></template>
          <template v-else
            ><div class="environment-blocks">
              <div v-for="item in ['app', 'nginx', 'mysql']" :key="item">
                <SvgIcon name="server" :size="22" /><span>{{ item }}</span>
              </div>
            </div></template
          >
        </div>
      </div>
    </div>
    <div
      class="layer-selector"
      role="group"
      aria-label="Explorar as camadas de uma aplicação"
    >
      <button
        v-for="(layer, index) in layers"
        :key="layer.name"
        type="button"
        :aria-pressed="active === index"
        :class="{ 'is-selected': active === index }"
        @click="selectLayer(index)"
      >
        <SvgIcon :name="layer.icon" :size="17" /><span>{{ layer.name }}</span>
      </button>
    </div>
    <p class="layer-description" aria-live="polite" aria-atomic="true">
      {{ layers[active]?.text }}
    </p>
    <button
      class="assemble-button"
      type="button"
      :aria-pressed="assembled"
      @click="assembled = !assembled"
    >
      <SvgIcon name="layers" :size="16" />
      {{ assembled ? "Separar camadas" : "Juntar camadas" }}
    </button>
  </div>
</template>
