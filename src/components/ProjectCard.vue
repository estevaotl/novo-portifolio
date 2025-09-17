<template>
    <div class="border rounded-lg p-4 shadow-md">
        <div class="carousel overflow-hidden relative h-64">
            <img v-for="(img, index) in projeto.imagens" :key="index" :src="img"
                class="absolute w-full h-full transition-opacity duration-500"
                :class="{ 'opacity-100': index === imagemAtual, 'opacity-0': index !== imagemAtual }" />
        </div>

        <h2 class="text-xl font-bold mt-4">{{ projeto.titulo }}</h2>
        <p>{{ projeto.descricao }}</p>

        <div class="flex gap-2 mt-2">
            <img v-for="(tech, index) in projeto.tecnologias" :key="index" :src="tech.icone" :alt="tech.nome"
                class="w-9 h-9" />
        </div>

        <a :href="projeto.link" target="_blank"
            class="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Repositório
        </a>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import type { Projeto } from '../types/types.ts'

const props = defineProps<{
    projeto: Projeto
}>()

const imagemAtual = ref(0)

onMounted(() => {
    setInterval(() => {
        imagemAtual.value = (imagemAtual.value + 1) % props.projeto.imagens.length
    }, 3000)
})
</script>

<style scoped>
.carousel img {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
