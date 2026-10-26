<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import SvgIcon from "./SvgIcon.vue";
const email = "estevaotlnf@gmail.com";
const copyStatus = ref("");
let feedbackTimer: ReturnType<typeof setTimeout> | undefined;
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.value = "E-mail copiado!";
  } catch {
    copyStatus.value = "Não foi possível copiar. Selecione o e-mail acima.";
  }
  clearTimeout(feedbackTimer);
  feedbackTimer = setTimeout(() => {
    copyStatus.value = "";
  }, 4000);
}
onUnmounted(() => clearTimeout(feedbackTimer));
</script>
<template>
  <section id="contato" class="contact-section" aria-labelledby="contact-title">
    <div class="container contact-inner">
      <div>
        <p class="contact-intro">O próximo desafio pode começar aqui.</p>
        <h2 id="contact-title">Vamos construir<br />algo juntos?</h2>
        <p class="contact-description">
          Tenho interesse em oportunidades Full Stack<br />plenas e seniores,
          remotas no Brasil.
        </p>
      </div>
      <div class="contact-actions">
        <a class="email-link" :href="`mailto:${email}`"
          >{{ email }} <SvgIcon name="arrow-up-right" :size="26" /></a
        ><button class="copy-email" type="button" @click="copyEmail">
          <SvgIcon
            :name="copyStatus === 'E-mail copiado!' ? 'check' : 'copy'"
            :size="17"
          />{{ copyStatus === "E-mail copiado!" ? "Copiado" : "Copiar e-mail" }}
        </button>
        <p class="copy-status" role="status">{{ copyStatus }}</p>
        <div class="contact-socials">
          <a
            href="https://www.linkedin.com/in/estevao-leite/"
            target="_blank"
            rel="noopener noreferrer"
            ><SvgIcon name="linkedin" :size="20" /> LinkedIn
            <SvgIcon name="arrow-up-right" :size="17" /></a
          ><a
            href="https://github.com/estevaotl"
            target="_blank"
            rel="noopener noreferrer"
            ><SvgIcon name="github" :size="20" /> GitHub
            <SvgIcon name="arrow-up-right" :size="17" /></a
          ><a
            href="https://wa.me/5522997249606?text=Ol%C3%A1%2C%20Est%C3%AAv%C3%A3o!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            >WhatsApp <SvgIcon name="arrow-up-right" :size="17"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>
