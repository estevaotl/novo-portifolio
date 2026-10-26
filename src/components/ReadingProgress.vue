<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const progress = ref(0);
let frame = 0;

function updateProgress() {
  frame = 0;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.value =
    scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
}

function scheduleUpdate() {
  if (!frame) frame = requestAnimationFrame(updateProgress);
}

onMounted(() => {
  updateProgress();
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
});

onUnmounted(() => {
  cancelAnimationFrame(frame);
  window.removeEventListener("scroll", scheduleUpdate);
  window.removeEventListener("resize", scheduleUpdate);
});
</script>

<template>
  <div class="reading-progress" aria-hidden="true">
    <span :style="{ transform: `scaleX(${progress})` }"></span>
  </div>
</template>
