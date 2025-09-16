<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <ProjectCards v-for="projeto in projetos" :key="projeto.id" :projeto="projeto" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProjectCards from './ProjectCard.vue'
import type { Projeto } from '../types/types.ts'

const projetos = ref<Projeto[]>([])

onMounted(async () => {
    const res = await fetch('../../public/projetos.json')
    projetos.value = await res.json()
})
</script>
