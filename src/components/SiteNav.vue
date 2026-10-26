<script setup lang="ts">
import { ref } from "vue";
import SvgIcon from "./SvgIcon.vue";
const menuOpen = ref(false);
function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <header class="site-header" @keydown.esc="closeMenu">
    <div class="container nav-bar">
      <a
        class="wordmark"
        href="#inicio"
        aria-label="Estêvão Leite, início"
        @click="closeMenu"
      >
        <svg viewBox="0 0 38 38" width="38" height="38" aria-hidden="true">
          <path
            d="M6 11h14v6H6v10h14M28 7v20h7"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="square"
          />
          <path d="M6 22h10" stroke="currentColor" stroke-width="4" />
        </svg>
        <span>estêvão<span class="wordmark-dot">.</span></span>
      </a>
      <button
        class="mobile-menu-button icon-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="site-navigation"
        :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="menuOpen = !menuOpen"
      >
        <SvgIcon :name="menuOpen ? 'close' : 'menu'" />
      </button>
      <nav
        id="site-navigation"
        class="site-navigation"
        :class="{ 'is-open': menuOpen }"
        aria-label="Navegação principal"
      >
        <a href="#projetos" @click="closeMenu">Projetos</a
        ><a href="#trajetoria" @click="closeMenu">Trajetória</a
        ><a href="#sobre" @click="closeMenu">Sobre mim</a
        ><a class="nav-contact" href="#contato" @click="closeMenu"
          >Vamos conversar <SvgIcon name="arrow-up-right" :size="18"
        /></a>
      </nav>
    </div>
  </header>
</template>
